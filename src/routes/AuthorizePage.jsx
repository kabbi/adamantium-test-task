import React from 'react';

export default class AuthorizePage extends React.Component {
    static propTypes = {
        onAuthorized: React.PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.onAuthorized(this.props.params.token);
    }

    render() {
        return (<div>You are being authorized, please wait</div>)
    }
}
