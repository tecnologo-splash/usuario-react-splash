import React, {useEffect, useState, useRef, useCallback} from 'react';
import { MenuHeader } from '../components/Menu/MenuHeader';
import { listarUsuariosASeguir } from '../services/UsuariosApi';
import { INITIAL_PAGE } from '../config/api/settings';
import useNearScreen from '../hooks/useNearScreen';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { URL_BASE_FILE_STORAGE } from "../config/api/settings";
import debounce from 'just-debounce-it';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useAmigosSugeridosHook } from '../hooks/useAmigosSugeridosHook';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    media: {height: 190, },
  }));

export default function Usuarios() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const externalRef = useRef();
    const [totalElements, setTotalElements] = useState(0);
    const [ cambia, setCambia ] = useState("");

    let { cadena } = useParams();

    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const debounceHandleNextPage = useCallback(debounce(
        () =>
          setPage(prevPage => prevPage + 1)
        , 200), [setPage])

    useEffect(()=>{
        setUsers([])
        setTotalElements(0)
        setPage(0)
    },[])

    useEffect(()=>{
        let totalElementos = 0;
        let usuarios = [];
        listarUsuariosASeguir({page,cadena,filtro:"nombre"}).then((data)=>{
            totalElementos = totalElementos + data.total_elements;
            usuarios = usuarios.concat(data.content)
            setLoading(false)
        }).then(() => {
            listarUsuariosASeguir({page,cadena,filtro:"apellido"}).then((data)=>{
                totalElementos = totalElementos + data.total_elements;
                usuarios = usuarios.concat(data.content)
                setLoading(false)
            }).then(()=>{
                let listUsuarios = users.concat(usuarios)
                let hash = {}
                let result = listUsuarios.filter((item)=>{
                    let exists = !hash[item.id];
                    hash[item.id] = true;
                    return exists;
                })
                
                setUsers(result)
            })
        })
        setTotalElements(totalElementos);
    },[page,cambia])

    useEffect(()=>{
        for (let i=users.length ; i > 0 ; i-- ){
            users.pop()
        }
        setPage(0)
        setCambia(cadena)
    },[cadena])


    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
      }, [debounceHandleNextPage, isNearScreen])

    return(
        <>
            <MenuHeader />
            <div className="col-md-8 offset-md-2 mb-4">
                {loading && users.length===0
                ? 
                    <div>   
                        <>
                            <CargandoUser />
                            <br/>
                            <CargandoUser />
                        </>
                    </div>
                : 
                    <>

                        {
                            users.map((user,index)=>(
                                <CardUser key={user.id} user={user} />
                            ))
                        }

                        { totalElements > users.length &&
                            <div id="visor" ref={externalRef}>
                                <div>
                                    <CargandoUser />
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
            
        </>
    )

}

export function CardUser({user}) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <Card className={classes.card}>
            <CardHeader
            
                avatar={
                    <Avatar  
                        style={{cursor:"pointer"}} 
                        onClick={()=>history.push(`/home/perfil/${user.id}`)} 
                        style={{width:"70px",height:"70px"}} 
                        className="m-1" 
                        large 
                        src={URL_BASE_FILE_STORAGE+user.url_perfil} 
                    /> 
                }
                action={
                    <SeguirDejarDeSeguir 
                        losigo={user.lo_sigo} 
                        id={user.id} 
                    />
                }
                title={user.nombre + " " + user.apellido}
                subheader={"@" + user.usuario}
            />
        </Card>
    )

}



export function CargandoUser() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={ <Skeleton animation="wave" variant="circle" width={70} height={70} /> }
                title={ <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> }
                subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
        </Card>
    );
}


  

export function SeguirDejarDeSeguir({ losigo, id }) {
    const [follow, setFollow] = useState(losigo);
    const { dejarDeSeguir, seguirUsuario } = useAmigosSugeridosHook();

    const comenzarASeguir = () => {
        seguirUsuario(id);
        setFollow(true);
    }

    const dejarDeSeguirUsuario = () => {
        dejarDeSeguir(id);
        setFollow(false);
    }
    
    return (
        <>
            {follow ?
                <Button variant="outlined" size="small" color="secondary" className="mt-2" onClick={dejarDeSeguirUsuario}>
                    Dejar de Seguir
                </Button>
                :
                <Button variant="contained" size="small" color="primary" className="mt-2" onClick={comenzarASeguir}>
                    Seguir
                </Button>
            }
        </>
    )
}