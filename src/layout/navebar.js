import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { MenuIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Tabs, Tab, Button } from '@mui/material';



  

const Navebar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx ={{background:"#063970"}}>
        <Toolbar>
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
            <MenuIcon sx={{marginRight:"10px"}}/>
            <Typography sx={{margin:"10px"}}>
            RANDOM SITE
          </Typography>
          </IconButton> 
            
          <Tabs textColor="inherit">
            <Tab label="Home"/>
            <Tab label="About"/>
            <Tab label="Contact"/>
          </Tabs>

          <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
)}

export default Navebar;