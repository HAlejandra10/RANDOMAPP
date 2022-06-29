import { Drawer, IconButton, List, ListItemButton, ListItemText} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
  const [openDrawer, setopenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer}
      onClose= {() => setopenDrawer(false)}
      >
           <List>
              <ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      Login
                    </ListItemText>
                  </ListItemButton>
              </ListItemButton>
           </List>
      </Drawer>
      <IconButton onClick={()=> setopenDrawer(!openDrawer)}>
      <MenuIcon sx={{marginRight:"10px"}}/>
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent
