import React, { Component } from 'react';
import { Title } from '../components/title';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

export default class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResult = (res) => {
        this.setState({ results: res, usedSearch: true });
    }

    _renderResults = () => {
        return this.state.results.length === 0 ? <p>Sin resultados</p> : <MoviesList movies={this.state.results}></MoviesList>;
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResult={this._handleResult}></SearchForm>
                </div>
                {this.state.usedSearch ? this._renderResults() : <small>Usa el formulario para buscar</small>}
            </div>
        )
    }
}