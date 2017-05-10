import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Carousel, Image } from 'react-bootstrap';

// class component
export default class TopCarousel extends Component {

    render() {
        return (
            <Carousel className='text-center'>
                {
                    this.props.posts.map( post => {
                        return (
                            <Carousel.Item key={post.id}>
                                <Image
                                    src={post.thumbnail_images.full.url}
                                    responsive
                                />
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        );
    }

}
