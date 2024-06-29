import React from 'react';
import { Container, Typography, AppBar, Toolbar, Box } from '@mui/material';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', p: 1,background:'dark' }}>
      <AppBar position="static" sx={{ mb: 0.625 }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6">
          Aljanan Tourisma & Travel Agency
          </Typography>
        </Toolbar>
      </AppBar>
      <Chatbot />
    </Container>
  );
}

export default App;
