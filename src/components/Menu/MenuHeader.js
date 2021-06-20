import React,{useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuItems from './RightMenuItems';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {BuscadorAmigos} from '../../services/SearchAmigos';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useHistory } from "react-router-dom";

export function MenuHeader(){
  let history = useHistory();

const useStyles = makeStyles(theme => ({
  cssLabel:{
    backgroundColor: "white",
    border:'1px solid black',
    borderRadius: "25px",
  },
    root: {
        backgroundColor: "#6F32C1" ,
    },
    search: {
        position: 'relative',
        borderRadius: '25px',
        backgroundColor:'#f1f2f6',
        '&:hover': {
            backgroundColor: ' #ecf0f1',
        },
        color:'#747d8c',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },  
        inputInput: {
            color:'#2f3542',
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),

        },
    }));
    const classes = useStyles();
    
        const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
    ];
 const [data,setData]=useState([""]);

 useEffect(()=>{
   /*(async()=>{
    const response=await BuscadorAmigos();
    const {content}=response;
    setData(content);
  
   })()
  */ 
 },[])

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
];
const goToHome=()=>{
  history.push("/home");
}
    return(  
        <>
      <AppBar  className={classes.root}>
    <Toolbar style={{ height:'65px' }} >

   <div className="col-md-8 d-flex justify-content-start">
    <img  src={process.env.PUBLIC_URL + '/recursos/icon_light.png'} alt="Logo Splash" width="50" onClick={goToHome} />
    
    <div className="d-flex align-items-center">

        {/*<div className={classes.search} >

            <InputBase className="col-md-12"
               startAdornment={
                <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              }
              placeholder="Buscar en Splash"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                focused:classes.cssLabel,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            */}
        <div className={classes.search} >
   <Autocomplete
   id="country-select-demo"
   style={{ width: 300 }}
   options={data}
   freeSolo={true}

   autoHighlight
   loading={true}
   loadingText="cargando"
   noOptionsText="sin datos"
   renderOption={(option) => (
     <>
       <span>
      <Avatar alt="Remy Sharp" src={option.url_perfil===null ? option.url_perfil :process.env.PUBLIC_URL + '/recursos/icon_light.png' } />{"  "}</span>
       {option.nombre} {option.apellido}
     </>
   )}
   renderInput={(params) => (
     
     <TextField
       {...params}
       placeholder=" Buscar en Splash"
       inputProps={{       
       ...params.inputProps,
       autoComplete: 'new-password',
      }}
     />
   )}
 /> 

        </div>

          </div>
    </div>




 



    <RightMenuItems/>
  

    </Toolbar>
  </AppBar>
<Toolbar />
</>
 )
}