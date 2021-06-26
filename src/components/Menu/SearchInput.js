import React, {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import { getUsersFollow } from '../../services/UsuariosApi';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { URL_BASE_FILE_STORAGE } from "../../config/api/settings";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';

export default function SearchInput() {

    const [users,setUsers] = useState([{}])
    const [inputValue,setInputValue] = useState("")

    useEffect(() => {

        const filters = []
        console.log(inputValue.substr(0,1))

        if (inputValue.substr(0,1) === "@") {
            filters.push({nombre:"usuario",value:inputValue.substr(1)})
        } else {
            filters.push({nombre:"nombre",value: inputValue})
        }

        getUsersFollow(filters)
            .then((response)=>{console.log(response);setUsers(response.content)})
    },[inputValue])


    const inputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => inputValue.substr(0,1)==="@"? "@"+option.usuario : option.nombre ,
    });

    return (
        <>
        {console.log(users)}
        
        <Autocomplete
            id="combo-box-demo"
            size="large"
            style={{ width: 300, backgroundColor:"whitesmoke",borderRadius:"100px",padding:"2%"}}
            onChange={(event,value)=> console.log(value)}
            getOptionLabel={(option) => option.nombre + " " + option.apellido}
            options={users}
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
                    onChange={inputChange} 
                    value={inputValue} 
                    
                />}
        >
            <SearchIcon style={{color:"red"}}/>
        </Autocomplete>
        </>
    );
}