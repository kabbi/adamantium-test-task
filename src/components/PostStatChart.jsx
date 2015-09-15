import React from 'react';
import {BarChart} from 'react-d3-components';
import prettyNumber from '../utils/number-formatter';

export default class PostStatChars extends React.Component {
    static propTypes = {
        posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        field: React.PropTypes.string,

        margin: React.PropTypes.object,
        size: React.PropTypes.shape({
            width: React.PropTypes.number,
            height: React.PropTypes.number
        })
    }

    static defaultProps = {
        margin: {
            top: 10, right: 20, bottom: 40, left: 60
        },
        size: {
            width: 350,
            height: 200
        }
    }

    render() {
        if (!this.props.posts.length) {
            return null;
        }
        let field = this.props.field;
        let data = [{
            values: this.props.posts.map((post, index) => {
                return {
                    x: (index + 1).toString(),
                    y: post[field].count
                };
            })
        }];
        return (
            <BarChart
                data={data}
                xAxis={{label: "Post"}}
                yAxis={{
                    label: "Count",
                    tickArguments: [5]
                }}
                height={this.props.size.height}
                width={this.props.size.width}
                margin={this.props.margin}/>
        )
    }
}
