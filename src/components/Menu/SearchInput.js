import React, {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import { getUsersFollow } from '../../services/UsuariosApi';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { URL_BASE_FILE_STORAGE } from "../../config/api/settings";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router-dom";

export default function SearchInput() {
    let history = useHistory();
    const [users,setUsers] = useState([{}])
    const [inputValue,setInputValue] = useState("")
    const [textFieldValue,setTextFieldValue] = useState("")

    useEffect(() => {

        const filters = []

        if (textFieldValue.substr(0,1) === "@") {
            filters.push({nombre:"usuario",value: textFieldValue.substr(1)})
        } else {
            filters.push({nombre:"nombre",value: textFieldValue})
        }

        getUsersFollow(filters)
            .then((response)=>{setUsers(response.content)})
    },[textFieldValue])


    const inputChange = (event,value) =>{
        if(value){ 
            history.push(`/home/perfil/${value.id}`);
        }
    }

    const textFieldChange = (event) =>{
        setTextFieldValue(event.target.value)
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => textFieldValue.substr(0,1)==="@"? "@"+option.usuario : option.nombre ,
    });

    return (
        <>
        
        <Autocomplete
            id="combo-box-demo"
            size="large"
            style={{ width: 300, backgroundColor:"whitesmoke",borderRadius:"100px",padding:"2%"}}
            getOptionLabel={(option) => `${option.nombre} ${option.apellido}`}
            options={users}
            onChange={(event,value)=>inputChange(event,value)} 
            filterOptions={filterOptions}
            renderOption={(option) => (
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