import {useStyles} from '../../../StyleInputPublicacion';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";


export function OpcionesEncuesta({ idOpcion }) {
    const classes = useStyles();
    
    return (
      <div className="col-md-12">
        {[...new Array(4)].map((item,index)=>{
          index++;
        return <div className="col-md-10 offset-md-1 align-self-center pl-0 mt-3"  key={index}>
          <div className={classes.inputPublicacion} >
            <div className={classes.icon}>
              <SpeakerNotesIcon />
            </div>
            <InputBase
              className="col-md-12"
              placeholder={"Opcion "+index}
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
    label="Fecha Cierre de Encuesta"
    type="datetime-local"
    className="col-md-10" 
    //defaultValue={}
    InputLabelProps={{
      shrink: true,
    }}
  />
      </div>
      </div>
    )
  }