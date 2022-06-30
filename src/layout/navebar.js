import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Tabs, Tab, Button,useMediaQuery, useTheme, Link} from '@mui/material';
import DrawerComponent from './drawerComponent';

import image from "../layout/biglogo.png"



const PAGES= ["Home", "About", "Contact", "Consult" ]

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
        <Link to="">
         <img src={image}  alt='logo' width={50} />
        </Link>
        
                 { 
                    isMatch ? (
                        <>
                        <Typography  sx={{fontSize: "1.5rem",paddingLeft:"10px"}}>
                            RANDOM SITE
                        </Typography>
                        <DrawerComponent/>
                        </>
                    ): (
                        <> <Tabs sx={{marginLeft: 'auto'}}textColor="inherit" value={value} onChange={(e,value)=> setvalue(value)} indicatorColor="secondary">
                            {
                                PAGES.map((page, index) => (
                                    <Tab  key={index} label={page}/>
                                )) 
                            }
                        
                        {/* <Tab label="About"/>
                        <Tab label="Contact"/>
                        <Tab label="Consult"/> */}
            
                      </Tabs>
            
                      <Button sx={{marginLeft:"auto"}} variant="contained">Login{" "}</Button>
                      <Button sx={{marginLeft: "10px"}}variant="contained">Sign Up{" "}</Button>
                      </>
                       
                    )
                }
        </Toolbar>
      </AppBar>
    </Box>
)}

export default Navebar;