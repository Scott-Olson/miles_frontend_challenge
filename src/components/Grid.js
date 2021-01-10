import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RewardLane from './RewardLane';

class Grid extends Component {


    componentDidMount() {
        // this.props.fetchRewards();

    }
    render() {
        return (

            <div className="Grid">
                <h4>Grid</h4>
                <RewardLane />
            </div>
        )
    }
}

Grid.propTypes = {

}

export default Grid;
