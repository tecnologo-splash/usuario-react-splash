import React,{useState} from "react";
import "emoji-mart/css/emoji-mart.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Link from "@material-ui/core/Link";
import {PerfilAvatar} from '../Perfil/PerfilAvatar';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useAmigosSugeridosHook} from '../../../hooks/useAmigosSugeridosHook';
import {SIZE_SUGERENCIAS_AMIGOS_MURO} from '../../../config/api/settings';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


export function Amigos({}){

    const [value, setValue] = useState(0);
    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },
      });
      const classes = useStyles();
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <Paper className={classes.root +" col-md-8 offset-md-2"}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            
          >
            <Tab label="Me Siguen" />
            <Tab label="Yo Sigo" />
          </Tabs>

          <TabPanel value={value} index={0}>
              <div className="row mt-5">
          <CardAmigos /><CardAmigos /><CardAmigos /><CardAmigos /><CardAmigos />
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item asd
      </TabPanel>
        </Paper>
      )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
      >
        {value === index && (
            <Typography>{children}</Typography>
         
        )}
      </div>
    );
  }

export function CardAmigos({userData={},seguirUsuario}){

    return(
      <div        className="col-md-3 mb-4"
      >
      <PerfilAvatar img={userData.url_perfil}/>
  
      <div className="col flex-nowrap">
      <Typography variant="body1">{userData.nombre} {userData.apellido}</Typography>
      <Typography variant="body2" color="textSecondary">
      @{userData.usuario}
      </Typography>
    </div>
    <div className="col-md-12">
      <Button
        style={{ textTransform: "none" }}
        variant="outlined"
        color="primary"
        size="small"
        className="mt-1"
        fullWidth
       // onClick={()=>seguirUsuario(userData.usuario_id)}
      >
        <PersonAddIcon className="mr-2" />{" "}
        <Typography> Seguir</Typography>
      </Button>
    </div>
    </div>
    )
  }