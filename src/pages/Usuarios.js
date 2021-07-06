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


const useStyles = makeStyles((theme) => ({
    media: {height: 190, },
  }));

export default function Usuarios() {
    const classes = useStyles();
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const externalRef = useRef();
    const [totalElements, setTotalElements] = useState(0);

    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const debounceHandleNextPage = useCallback(debounce(
        () =>
          setPage(prevPage => prevPage + 1)
        , 200), [setPage])

    useEffect(()=>{
        listarUsuariosASeguir({page}).then((data)=>{
            setTotalElements(data.total_elements);
            setUsers(users => [...users, ...data.content])
            setLoading(false)
        })
    },[page])

    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
      }, [debounceHandleNextPage, isNearScreen])

    return(
        <>
            <MenuHeader />
            {console.log(users)}
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
                            
                                <Card className={classes.card} style={{cursor:"pointer"}} onClick={()=>history.push(`/home/perfil/${user.id}`)}>
                                    <CardHeader
                                        avatar={
                                            // <Skeleton animation="wave" variant="circle" width={40} height={40} />
                                            <Avatar style={{width:"70px",height:"70px"}} className="m-1" large src={URL_BASE_FILE_STORAGE+user.url_perfil} />
                                        }
                                        title={user.nombre + " " + user.apellido}
                                        subheader={"@" + user.usuario}
                                    />
                                </Card>


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