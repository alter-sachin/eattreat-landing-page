import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

// class component
export default class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <Grid fluid={true}>
                    <Row className='show-grid'>
                        { this.props.children }
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }

}
