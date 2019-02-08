import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Login from './page/Login.js';
import Registration from './page/Registration.js';
import Search from './page/Search.js';
import History from './page/History.js';
import PrivateRoute from './PrivateRoute';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware} from 'redux';


const  store=createStore(()=>[],{},applyMiddleware());

class App extends Component {
  render() {
    return (


      <Provider store={store}>

      <div className="App"> 
      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/registration' component={Registration}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/history' component={History}/>
   </div>

   </Provider>
    );
  }
}

export default App;
