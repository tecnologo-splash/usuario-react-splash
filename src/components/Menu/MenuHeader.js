import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuItems from './RightMenuItems';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export function MenuHeader(){

const useStyles = makeStyles(theme => ({

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


    return(  
        <>
      <AppBar  className={classes.root}>
    <Toolbar style={{ height:'65px' }} >

   <div className="col-md-4 d-flex justify-content-start">
    <img  src={process.env.PUBLIC_URL + '/recursos/icon_light.png'} alt="" width="50" />
    </div>


    <div className="col-md-4 d-flex justify-content-center">

        <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase className="col-md-12"
            
              placeholder="Buscar en Splash"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
  
          </div>



    <RightMenuItems/>
  

    </Toolbar>
  </AppBar>
<Toolbar />
</>
 )
}