//Componentes
import React, {Component} from 'react';
import {Title} from './components/title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';

//Paginas
import Details from './pages/Details';

//Hojas de estilo
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  state = {usedSearch: false, results: []}

  _handleResult = (res) => {
    this.setState({results: res, usedSearch: true});
  }

  _renderResults = () => {
    return this.state.results.length === 0 ? <p>Sin resultados</p> : <MoviesList movies={this.state.results}></MoviesList>;
  }
  
  render(){
    const url = new URL(document.location);
    const hasId = url.searchParams.has('id');

    if(hasId){
      return <Details id={url.searchParams.get('id')}></Details>
    }

    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResult={this._handleResult}></SearchForm>
        </div>
        {this.state.usedSearch ? this._renderResults() : <small>Usa el formulario para buscar</small>}
      </div>
    );
  }
  
}

export default App;
