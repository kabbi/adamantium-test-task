import React from 'react';
import prettyNumber from '../utils/number-formatter';

export default class PrettyCount extends React.Component {
    static propTypes = {
        value: React.PropTypes.number
    }

    render() {
        return (<span>{prettyNumber(this.props.value || 0)}</span>)
    }
}
