import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import * as api from '../utils/instagram-api';

export default class Header extends React.Component {
    static propTypes = {
        authorized: React.PropTypes.bool.isRequired,
        onLoginClick: React.PropTypes.func.isRequired
    }

    state = {
        username: null
    }

    handleNavItemClick() {
        if (this.props.authorized) {
            return;
        }
        this.props.onLoginClick();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.authorized && !this.props.authorized) {
            api.fetch('users/self').then((user) => {
                this.setState({
                    username: '@' + user.username
                });
            });
        }
    }

    render() {
        let username = this.state.username || '...';
        return (
            <Navbar fixedTop brand='Instagram trends'>
                <Nav onSelect={this.handleNavItemClick.bind(this)} right>
                    <NavItem href="#">
                        {this.props.authorized ? username : 'Sign in with Instagram'}
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
