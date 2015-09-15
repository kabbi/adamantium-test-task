import React from 'react'
import { RouteHandler, Link } from 'react-router'
import * as api from '../utils/instagram-api';
import Header from '../components/Header'

export default class App extends React.Component {
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    }

    state = {
        authorized: false
    }

    handleAuthorizedEvent(token) {
        api.persistAuthToken(token);
        this.setState({
            authorized: true
        });
        this.context.router.transitionTo('/trends', {
            token
        });
    }

    handleLoginClick() {
        window.location.href = api.INSTAGRAM_AUTH_URL;
    }

    render() {
        return (
            <div className='container'>
                <Header
                    authorized={this.state.authorized}
                    onLoginClick={this.handleLoginClick.bind(this)}/>
                <RouteHandler
                    onAuthorized={this.handleAuthorizedEvent.bind(this)}/>
            </div>
        );
    }
}
