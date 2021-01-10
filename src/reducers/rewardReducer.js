import React from 'react';
import { NEW_REWARD, DEL_REWARD, MOVE_REWARD, SAVE_REWARDS } from '../actions/types';

const initialState = {
    rewards: [],
    categories: [],
}


export default function rewardReducer(state = initialState, action) {
    // switch (action.type) {
    //     // case NEW_REWARD:
    //     //     return state;

    //     // case DEL_REWARD:
    //     //     return state;

    //     // case MOVE_REWARD:
    //     //     return state;

    //     // case SAVE_REWARDS:
    //     //     return state;

    //     default:
    //         return state;
    // }
    return state;
}
