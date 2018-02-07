import * as React from 'react';

import { ThemeProvider, colorsMap } from './theming';
import { Text } from './components';
import './App.scss';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{colors: {...colorsMap}}}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Text>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </Text>
        </div>
      </ThemeProvider>      
    );
  }
}

export default App;
