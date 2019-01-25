import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Login from './page/Login.js';
import Registration from './page/Registration.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/Login' component={Login}/>
      <Route path='/Registration' component={Registration}/>
   </div>
    );
  }
}

export default App;
