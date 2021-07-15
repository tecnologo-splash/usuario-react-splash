import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuItems from './RightMenuItems';
import { useHistory } from "react-router-dom";
import SearchInput from './SearchInput';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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


  const estiloCursor=css`cursor:pointer; border-radius: 10px`;

  const goToHome=()=>{
    history.push("/home");
  }
  return(  
      <>
        <AppBar  className={classes.root}>
          <Toolbar style={{ height:'65px' }} >

            <div className="col-md-8 d-flex justify-content-start">
              <img  src={process.env.PUBLIC_URL + '/recursos/svg/icon_dark.svg'} alt="Logo Splash" width="50"
                css={estiloCursor}
                onClick={goToHome} 
              />
  
              <div className="d-flex align-items-center">

      
                <div className={classes.search} >
                  <SearchInput />


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