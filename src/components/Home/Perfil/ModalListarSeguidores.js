import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import { UsuarioBadge } from './UsuarioBadge';

const useChipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  avatarSmall: {
    height: '20px',
    width: '20px'
  },
  avatarBig: {
    height: '40px',
    width: '40px'
  },
  checkbox: {
    checked: {
      color: '#601683',
    }
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    borderRight: '1px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function ModalListarSeguidores({tipo, getSeguidores, openModal, setOpenModal, cantidad}) {
  const classes = useStyles();
  
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [usuarios, setUsuarios] = useState();
  const [select, setSelect] = useState('');
  
  const [params, setParams] = useState({
    filtro: '',
    keywords: null
  });

  let filters = params;

  useEffect(()=>(
    getSeguidores(tipo, page, params).then((r) => {setUsuarios(r)})
  ),[page, params]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = () => {
    setParams({
      filtro: filters.filtro,
      keywords: filters.keywords
    });
    setOpen(false);
    setPage(0);
  }

  const onChangeInput = (event) => {
    filters.keywords = event.target.value;
    
    console.log(filters)
  }

  const onChangeSelect = (event) => {
    filters.filtro = event.target.value;
    setSelect(event.target.value)
    console.log(filters)
  }

  const onCloseModal = () => {
    setOpenModal(false);
  } 

  const chipClasses = useChipStyles();

  const handleDelete = (param) => () => {
    setParams({
      filtro: '',
      keywords: null
    });
    setSelect('')
  };
  
  return (
    <>
      <Dialog
          fullWidth
          maxWidth="sm"
          open={openModal}
          onClose={onCloseModal}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">
          <span>{tipo === 'yo-sigo' ? 'Usuarios siguiendo' : 'Mis seguidores'}</span>

            <Tooltip title="Buscar Usuarios">
              <IconButton aria-label="Filtrar Usuarios" onClick={handleClickOpen}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
     
        </DialogTitle>
        <DialogContent>
          <span>
            <span>
              { params.keywords && params.filtro ? 
                <Chip
                  label={`${params.filtro === "USUARIO" ? "Usuario" : params.filtro === "NOMBRE_APELLIDO" ? "Nombre/Apellido" : null}: "${params.keywords}"`}
                  onDelete={handleDelete()}
                  className={chipClasses.chip}
                /> : null
              }
            </span>
          </span>

          <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Búsqueda
          </DialogTitle>
          
          <DialogContent>
            <div>
              <span>
                <InputLabel id="filtro">Filtrar por...</InputLabel>
                <Select
                fullWidth
                  labelId="filtro"
                  id="filtro"
                  value={select}
                  onChange={onChangeSelect}
                >
                  <MenuItem value={'USUARIO'}>Usuario</MenuItem>
                  <MenuItem value={'NOMBRE_APELLIDO'}>Nombre/Apellido</MenuItem>
                </Select>
                <CampoTexto 
                  onChangeInput={onChangeInput}
                  name="keywords" 
                  Label="Valor"
                />
              </span>
            </div>
          </DialogContent>

          <DialogActions className="pb-4 mr-4">
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleFilter} color="primary" variant="contained">
              Guardar
            </Button>
          </DialogActions>
        </Dialog>

        <div className={classes.root}>
       
          <Grid container>

            <Grid container spacing={2}>
            {
              usuarios?.map((r) => (
                <UsuarioBadge
                  user={r}
                />
              ))
            }
          </Grid>

            </Grid>
        </div>

        </DialogContent>

        <DialogActions className="pb-4 mr-4">
          <Button  color="primary" onClick={onCloseModal}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

        </>
  );
}

export function CampoTexto({Label,Type="text",onChangeInput,name,error,helperText}){
  return (
    <span>
    <TextField
    fullWidth
      error = {error}
      helperText={error ? helperText : ""}
      name={name}
      variant="standard"
      label={Label}
      onChange={onChangeInput}
      color="primary"
      type={Type}
    />
  </span>
  )
}