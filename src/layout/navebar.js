import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link} from '@mui/material';


import image from "../layout/biglogo.png"
import Home from '../pages/home';


// const PAGES= ["Home", "About Us", "Contact Us", "Consult Us" ]


const Navebar = () => {

    // const [value, setvalue] = useState();
    // const theme = useTheme();
    // console.log(theme);
    // const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    // console.log(isMatch)
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to="">
         <img src={image}  alt='logo' width={50} />
        </Link>
 
        <Typography variant="h4">
                 CRUD REACT
             </Typography>        
              <div>
            <Link to="/home" >
              <Home />
            </Link> 
            <Link to="/about" >
              <AppBar />
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/users">
              Users
            </Link>
          </div>
            
                      <Button sx={{marginLeft:"auto"}} variant="contained">Login{" "}</Button>
                      <Button sx={{marginLeft: "10px"}}variant="contained">Sign Up{" "}</Button>

        </Toolbar>
      </AppBar>
    </Box>
)}

export default Navebar;