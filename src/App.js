//Componentes
import React, {Component} from 'react';

//Paginas
import Details from './pages/Details';
import Home from './pages/Home';

//Hojas de estilo
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  
  render(){
    const url = new URL(document.location);
    const page = url.searchParams.has('id') ? <Details id={url.searchParams.get('id')}></Details> : <Home></Home>;

   return (
      <div className="App">
        {page}
      </div>
    );
  }
  
}

export default App;
