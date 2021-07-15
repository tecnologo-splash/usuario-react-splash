import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { useFuncionesDelMuro } from '../../../../hooks/useMuroHook';
import { Reaccion } from './Reaccion'

export function ModalReacciones({pubId, openModal,setOpenModal}){

  const onCloseModal = () => {
      setOpenModal(false);
  }

  const { reacciones, getReacciones } = useFuncionesDelMuro();

  useEffect(() => {
    getReacciones(pubId);
  }, [])

  //! aca meter el hook que traiga la data. ni me caliento
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reacciones</DialogTitle>
        <DialogContent>

          <Grid container spacing={2}>
            {
              reacciones?.content?.map((r) => (
                <Reaccion
                  reaccion={r.emoji}
                  user={r.usuario_comun}
                />
              ))
            }
            {
              reacciones?.content?.length % 2 ? 
              <Reaccion
                reaccion={null}
                user={null}
              />: null
            }
          </Grid>
            
        </DialogContent>

        <DialogActions className="pb-4 mr-4">
          <Button  color="primary" onClick={onCloseModal}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}