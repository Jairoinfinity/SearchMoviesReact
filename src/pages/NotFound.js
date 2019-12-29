import React, { Component } from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Error 404</h1>
                <h2 className='subtitle'>No existe la página</h2>
                <ButtonBackToHome></ButtonBackToHome>
            </div>
        )
    }
}