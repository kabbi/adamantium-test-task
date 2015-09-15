import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

export default class ButtonTabs extends React.Component {
    static propTypes = {
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            key: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired
        })).isRequired
    }

    state = {
        selected: this.props.options[0].key
    }

    handleItemClick(key, event) {
        event.preventDefault();
        this.props.onSelect(key);
        this.setState({
            selected: key
        });
    }

    render() {
        return (
            <ButtonGroup justified>
                {this.props.options.map((item) => {
                    return (
                        <Button
                            onClick={this.handleItemClick.bind(this, item.key)}
                            active={this.state.selected === item.key}
                            key={item.key}
                            href="#">
                            {item.label}
                        </Button>
                    );
                })}
            </ButtonGroup>
        )
    }
}
