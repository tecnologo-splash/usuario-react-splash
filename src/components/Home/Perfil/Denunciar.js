import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';
import { ModalDenunciar } from './ModalDenunciar'
import { useInfoUserHook } from '../../../hooks/useInfoUserHook';

export function Denunciar({ datosUsuario }) {

  const [open, setOpen] = useState(false);
  const { crearDenunciaUsuario } = useInfoUserHook();
  
  const handleClick = () => {
      setOpen(true);
  }

  const denunciarUsuario = (data) => {
    return crearDenunciaUsuario(data);
  }

  return (
    <>
      <Button
        className="mt-2"
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<ReportIcon/>}
        onClick={handleClick}
      >
          Reportar
      </Button>
      {
        open ?  <ModalDenunciar 
          open = {open} 
          setOpen = {setOpen}
          datosUsuario = {datosUsuario}
          denunciarUsuario = {denunciarUsuario}
        />
        : null
      }
    </>
  )
}