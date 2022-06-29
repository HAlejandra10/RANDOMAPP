import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tabs, Tab, Button,useMediaQuery, useTheme} from '@mui/material';
import DrawerComponent from './drawerComponent';



  

const Navebar = () => {

    const [value, setvalue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    console.log(isMatch)
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx ={{background:"#063970"}}>
        <Toolbar>
         {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >  */}
            <Typography sx={{margin:"10px"}}>
            RANDOM SITE
          </Typography>
          {/* </IconButton>  */}
            
          <Tabs textColor="inherit" value={value} onChange={(e,value)=> setvalue(value)} indicatorColor="secondary">
            <Tab label="Home"/>
            <Tab label="About"/>
            <Tab label="Contact"/>
            <Tab label="Consult"/>

          </Tabs>

          <Button sx={{marginLeft:"auto"}} variant="contained">Login{" "}</Button>
          <Button sx={{marginLeft: "10px"}}variant="contained">Sign Up{" "}</Button>
        </Toolbar>
        <DrawerComponent/>
      </AppBar>
    </Box>
)}

export default Navebar;