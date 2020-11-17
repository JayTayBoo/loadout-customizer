import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import './App.css';
import logo from './img/mw-wz-logodark.png'
import LandingPage from './LandingPage/LandingPage.js'
import LoadoutScreen from './LoadoutScreen/LoadoutScreen.js'

class App extends React.Component{

  renderRoutes() {
    return (
      <>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/loadout' component={LoadoutScreen}/>
      </>
    );
  }

  render(){

    return (
      <Router>
        <main className='App'>
          <img src={logo} alt='mw-warzone-logo.png'/>
          <h1> Loadout Generator </h1>
          {this.renderRoutes()}
        </main>
      </Router>
    );
  }
};

export default App;
