import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Login from './page/Login.js';
import Registration from './page/Registration.js';
import Result from './page/Result.js';
import History from './page/History.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/Login' component={Login}/>
      <Route path='/Registration' component={Registration}/>
      <Route path='/Result' component={Result}/>
      <Route path='/History' component={History}/>



   </div>
    );
  }
}

export default App;
