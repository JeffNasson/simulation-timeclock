import React, { Component } from 'react';
import './App.css';
import './styles/main.css'
import Header from './Components/Header/Header.js';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        
      </div>
    );
  }
}

export default App;
