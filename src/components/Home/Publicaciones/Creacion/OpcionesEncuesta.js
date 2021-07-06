import {useStyles} from '../../../StyleInputPublicacion';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';


export function OpcionesEncuesta({ idOpcion,  opcionesEncuesta,  setOpcionesEncuesta }) {
    const classes = useStyles();
    const handleChange=(e)=>{
      setOpcionesEncuesta({...opcionesEncuesta,[e.target.name]:e.target.value});
    }
    let pacheHolcer="";
    return (
      <div className="col-md-12">
        {[...new Array(4)].map((item,index)=>{
          index++;
          pacheHolcer= index===1 || index===2 ?'Opcion '+index+ ' *' : 'Opcion '+index;
        return <div className="col-md-10 offset-md-1 align-self-center pl-0 mt-3"  key={index}>
          <div className={classes.inputPublicacion} >
            <div className={classes.icon}>
              <SpeakerNotesIcon />
            </div>
            <InputBase
            onChange={handleChange}
              className="col-md-12"
              placeholder={pacheHolcer}
              classes={{
                input: classes.inputInput,
                focused: classes.cssLabel,
              }}
              name={"opcion_"+index}
            />
   

        </div>
      </div>
        })}
        <div className=" offset-md-2 mt-3">
  <TextField
    label="Fecha Cierre de Encuesta *"
    type="datetime-local"
    className="col-md-10" 
    //defaultValue={}
    onChange={handleChange}
    name="fecha_cierre_encuesta"
    InputLabelProps={{
      shrink: true,
    }}
  />
      </div>
      <div className=" offset-md-2 mt-3">
      <Typography variant="caption" display="block" gutterBottom>
      * Campos Obligatorios
      </Typography>
      </div>
      </div>
    )
  }