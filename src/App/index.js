import React from 'react';
import './App.css';

import styled, { css } from 'styled-components'

import AppLayout from './AppLayout'
import WelcomeMessage from './WelcomeMessage'
import AppBar from './AppBar'

function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;