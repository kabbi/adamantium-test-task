import React from 'react';
import {Jumbotron, Grid, Col, Row} from 'react-bootstrap';
import {RedirectWhenUnauthorized} from '../utils/decorators';
import * as api from '../utils/instagram-api';
import ButtonTabs from '../components/ButtonTabs';
import PostStatChart from '../components/PostStatChart';
import PostTable from '../components/PostTable';

@RedirectWhenUnauthorized('about')
export default class TrendsPage extends React.Component {

    state = {
        posts: [],
        graph: 'likes'
    }

    componentDidMount() {
        api.fetch('media/popular').then((posts) => {
            this.setState({
                posts: posts.slice(0, 10)
            });
        });
    }

    handleTabChange(key) {
        this.setState({
            graph: key
        });
    }

    render() {
        return (
            <Jumbotron>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <ButtonTabs
                                onSelect={this.handleTabChange.bind(this)}
                                options={[{
                                    key: 'likes',
                                    label: 'Likes'
                                }, {
                                    key: 'comments',
                                    label: 'Comments'
                                }]}/>
                            <PostStatChart
                                field={this.state.graph}
                                posts={this.state.posts}/>
                        </Col>
                        <Col md={6}>
                            <PostTable posts={this.state.posts}/>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        )
    }
}
