import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


function Header() {

  return (
    <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar disableGutters >
            <img src={require("../assets/logo.png")} style={{marginLeft: "20px"}} width="150px" height="40px" alt="LOGO"/>
        </Toolbar>
    </AppBar>
  );
}
export default Header;