import {useStyles} from '../../../StyleInputPublicacion';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import AddIcon from '@material-ui/icons/Add';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

export function OpcionesEncuesta({ idOpcion }) {
    const classes = useStyles();
  
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-10 offset-md-1 align-self-center pl-0 mt-3">
            <div className={classes.inputPublicacion} >
              <div className={classes.icon}>
                <SpeakerNotesIcon />
              </div>
              <InputBase
                className="col-md-12"
                placeholder="Opcion 1"
                classes={{
                  input: classes.inputInput,
                }}
  
              />
            </div>
  
          </div>
          <div className="col-md-1 mt-3 pl-0 ">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }