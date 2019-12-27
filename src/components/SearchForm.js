import React, { Component } from 'react';

const API_KEY = 'http://www.omdbapi.com/?apikey=cfc5333b&';

export default class SearchForm extends Component {

    state = {inputMovie: ''}

    _handleChange = (e)=>{
        this.setState({inputMovie: e.target.value});
    }

    _handleSubmit = (e)=>{
        e.preventDefault();
        const { inputMovie } = this.state;
        fetch(`${API_KEY}s=${inputMovie}`)
        .then(res => res.json())
        .then(data => {
            const {Search, totalResults} = data;
            this.props.onResult(Search);       
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" onChange={this._handleChange} placeholder="Movie to search..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}