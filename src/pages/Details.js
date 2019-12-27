import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'http://www.omdbapi.com/?apikey=cfc5333b&';

export default class Details extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    state = { movie: {} };

    _fetchMovie = (id) => {
        fetch(`${API_KEY}i=${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movie: data });
            })
    }

    componentDidMount() {
        const { id } = this.props;
        this._fetchMovie(id);
    }

    _goBack = () => {
        window.history.back();
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}