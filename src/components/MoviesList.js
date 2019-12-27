import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props;
        return (
            <div className='MoviesList'>
                {
                    movies.map(mov => {
                        return (
                            <div key={mov.imdbID} className='MoviesList-item'>
                                <Movie
                                    id={mov.imdbID}
                                    title={mov.Title}
                                    year={mov.Year}
                                    poster={mov.Poster}>
                                </Movie>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}