import React from 'react';
import './App.css';

import styled, {css} from 'styled-components'

import AppLayout from './AppLayout'
import WelcomeMessage from './WelcomeMessage'

function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;