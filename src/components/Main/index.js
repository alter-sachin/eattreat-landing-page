import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Grid, Row } from 'react-bootstrap';

// custom components used
import TopCarousel from './TopCarousel';
import TwoBrands from './TwoBrands';
import FiveTags from './FiveTags';

// actions
import { getRecentPosts } from '../../actions/PostsAction';

// class component
class Main extends Component {

    componentWillMount() {
        this.props.getRecentPosts();
    }

    render() {
        if (this.props.posts.length < 1) {
            return <h2>loading...</h2>;
        }

        return (
            <div>
                <div>
                    <TopCarousel posts={this.props.posts} />
                </div>
                <div>
                    <TwoBrands />
                </div>
                <div>
                    <FiveTags posts={this.props.posts} />
                </div>
            </div>
        );
    }

}

export default connect( store => { return {
    // variables as props from redux store
    posts : store.reducedRecentPosts
} }, {
    // functions for action as props from actions
    getRecentPosts
})(Main);
