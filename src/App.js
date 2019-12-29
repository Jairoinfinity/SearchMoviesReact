//Componentes
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Paginas
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

//Hojas de estilo
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/detail/:id' component={Details}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
