import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuHeader} from '../components/Menu/MenuHeader';
import Notificaciones from '../components/Config/Notificaciones';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';
import EliminarCuenta from '../components/Config/EliminarCuenta';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ecf0f1",
  },
  tabs: {
    backgroundColor: "#ffffff",
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100vh'
  },
}));

export default function Config() {

  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MenuHeader/>
      <div className={classes.root}>
        <Grid container>
          <Grid item width="250px">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="" disabled />
              <Tab label="Notificaciones" icon={<NotificationsActiveIcon />} {...a11yProps(1)} />
              <Tab label="Eliminar cuenta" icon={<HighlightOffIcon />} {...a11yProps(2)} />
            
            </Tabs>
          </Grid>
          <Grid item xs>
            <TabPanel value={value} index={1}>
              
              <Notificaciones/>
              
            </TabPanel>
            <TabPanel value={value} index={2}>

              <EliminarCuenta/>
              
            </TabPanel>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

