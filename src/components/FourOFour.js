import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Panel, ListGroup, ListGroupItem, Image, Col } from 'react-bootstrap';

// class component
export default class FourOFour extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <h1>Page Not Found!</h1>
                </Row>
            </Grid>
        );
    }
}
