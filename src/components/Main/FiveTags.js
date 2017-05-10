import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Panel, Image, Media } from 'react-bootstrap';

// class component
export default class FiveTags extends Component {

    render() {
        return (
            <Row className='show-grid'>
                {
                    this.props.posts.map( post => {
                        return (
                            <Col xs={12} md={12} key={post.id}>
                                <Panel>
                                    <Media>
                                        <Media.Left>
                                            <Image width={64} height={64} src={post.thumbnail} />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>{post.title}</Media.Heading>
                                            {post.excerpt}
                                        </Media.Body>
                                    </Media>
                                </Panel>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }

}
