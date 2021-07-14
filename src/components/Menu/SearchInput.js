import React, {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { getUsersFollow } from '../../services/UsuariosApi';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { URL_BASE_FILE_STORAGE } from "../../config/api/settings";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useHistory, useLocation } from "react-router-dom";

export default function SearchInput() {
    let history = useHistory();
    let verMas = {verMas:true,usuario:"",nombre:"",apellido:"",url_perfil:"",id:0}
    
    const [users,setUsers] = useState([verMas])
    const [textFieldValue,setTextFieldValue] = useState("")
    const [usuarios, setUsuarios] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setUsuarios(users)
    },[users])


    const inputChange = (event,value) =>{
        if(value){ 
            if(!value.verMas){
                history.push(`/home/perfil/${value.id}`);
            } else {
                history.push(`/home/usuarios/${textFieldValue}`);
            }
        }
    }

    const textFieldChange = (event) =>{
        let value = event.target.value
        setTextFieldValue(event.target.value)

        const filters = []

        if (value.substr(0,1) === "@") {
            verMas.usuario = value.substr(1)
            filters.push({nombre:"usuario",value: value.substr(1)})
        } else {
            verMas.nombre = value
            filters.push({nombre:"search",value: value})
        }
        
        getUsersFollow(filters)
            .then((response)=>{
                const usuarios = response.content        
                usuarios.push(verMas)
                setUsers(usuarios)
            })
    
    } 

    const filterOptions = createFilterOptions({
        //matchFrom: 'start',
        stringify: option => textFieldValue.substr(0,1)==="@"? "@"+option.usuario : option.nombre + " " + option.apellido ,
    });

    return (
        <>
        {console.log(location.pathname.includes("/home/usuarios/"))}
            <Autocomplete
                id="combo-box-demo"
                
                style={{ width: 300, backgroundColor:"whitesmoke",borderRadius:"100px",padding:"2%"}}
                getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
                options={usuarios}
                onChange={(event,value)=>inputChange(event,value)} 
                filterOptions={filterOptions}
                renderOption={(option) => (
                    option.verMas ?
                    <>
                        <SearchIcon />
                        <span>Ver más</span>
                    </>
                    :
                    <React.Fragment>
                        <Avatar className="m-1" src={URL_BASE_FILE_STORAGE+option.url_perfil} /> {" "}
                        <span>{option.nombre + " " + option.apellido}</span>        
                        <span style={{color:"GrayText"}}>(@{option.usuario})</span>
                    </React.Fragment>
                )}
                renderInput={(params) => 
                    <TextField 
                        {...params} 
                        placeholder="Buscar en splash" 
                        //variant="outlined" 
                        value={textFieldValue} 
                        onChange={textFieldChange} 
                    />}
            >
                <SearchIcon style={{color:"red"}}/>
            </Autocomplete>
        </>
        
    );
}