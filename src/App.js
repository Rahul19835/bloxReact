import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import './styles/global-style.css';
import './styles/global-media.css';
import Home from './pages/home/home.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AppContext from './components/contaxt/appContext'


function App() {
  return (
    <AppContext>
      <Router>
          <Header/>
          <Switch>
              <Route path="/" exact component={Home} />
          </Switch>
          <Footer/>
        </Router>      
    </AppContext>
  );
}

export default App;
