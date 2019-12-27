import React, {Component} from 'react';
import {Title} from './components/title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  state = {results: []}

  _handleResult = (res) => {
    this.setState({results: res});
  }
  
  render(){
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResult={this._handleResult}></SearchForm>
        </div>
        {this.state.results.length === 0 ? <p>Sin resultados</p> : <MoviesList movies={this.state.results}></MoviesList>}
      </div>
    );
  }
  
}

export default App;
