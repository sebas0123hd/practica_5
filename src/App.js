import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Box, Container, Link, Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

function Copyright() {
    return (
        <Typography>
            { 'Copyright ' }
            <Link href="https://github.com/sebas0123hd/practica_5.git">
                {' Git '}
            </Link>
            { new Date().getFullYear() }
        </Typography>);
}

export default function MyApp() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <ButtonAppBar/>
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Mi primera App con React y Material UI :V
                </Typography>
                <Copyright/>

            </Box>
        </Container>
    );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Practica 5</h1>
          <selectAcceso />
      </header>
    </div>
  );
}


