import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  content: {
      padding: theme.spacing(3),
      backgroundColor:'#ecf0f1'
  },
}));


export default function EliminarCuenta() {
  return (
    <>
      <h1>Eliminar cuenta WIP</h1>
    </>
  );
}
