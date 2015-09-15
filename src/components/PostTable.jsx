import React from 'react';
import {Table} from 'react-bootstrap';
import PrettyCount from './PrettyCount';

export default class PostTable extends React.Component {
    static propTypes = {
        posts: React.PropTypes.arrayOf(React.PropTypes.object),
        thumbStyle: React.PropTypes.object,
        tableProps: React.PropTypes.object
    }

    static defaultProps = {
        thumbStyle: {
            width: 65
        },
        tableProps: {
            hover: true,
            striped: true
        }
    }

    render() {
        return (
            <Table {...this.props.tableProps}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Preview</th>
                        <th>Username</th>
                        <th>Likes</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.posts.map((post, index) => {
                        return (
                            <tr key={post.id}>
                                <th>{index + 1}</th>
                                <td>
                                    <a href={post.link}>
                                        <img
                                            style={this.props.thumbStyle}
                                            src={post.images.thumbnail.url}>
                                        </img>
                                    </a>
                                </td>
                                <td>{post.user.username}</td>
                                <td>
                                    <PrettyCount value={post.likes.count}/>
                                </td>
                                <td>
                                    <PrettyCount value={post.comments.count}/>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        )
    }
}
