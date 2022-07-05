import { Drawer, IconButton, List, ListItemButton, ListItemText} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import AboutUs from '../pages/about';
import ContactUs from '../pages/contact';
import Consult from '../pages/consult';


const PAGES= ["Home", "About", "Contact", "Consult", "Login", "LogOut" ]

const DrawerComponent = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer}
      onClose= {() => setopenDrawer(false)}
      >
           <List>
            {
              PAGES.map((page, index) =>(
                <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
                     
                <ListItemButton>
                  <ListItemText>
            {page}
                  </ListItemText>
                </ListItemButton>
            </ListItemButton>
              ))
            }
           </List>
      </Drawer>
      <IconButton  sx= {{color:"white" , marginLeft:"auto"}} onClick={()=> setopenDrawer(!openDrawer)}>
      <MenuIcon sx={{marginRight:"10px"}}/>
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent
