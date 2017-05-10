import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Panel, Image } from 'react-bootstrap';

// class component
export default class TwoBrands extends Component {

    render() {
        return (
            <Row className='show-grid'>
                <Col xs={6} md={6} className='two-brands-image-col'>
                        <Image src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" responsive />
                </Col>
                <Col xs={6} md={6} className='two-brands-image-col'>
                        <Image src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" responsive />
                </Col>
            </Row>
        );
    }

}
