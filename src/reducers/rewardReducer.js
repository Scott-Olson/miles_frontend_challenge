import { NEW_REWARD, DEL_REWARD, MOVE_REWARD, SAVE_REWARDS } from '../actions/types';

const initialState = {
    rewards =[],
    categories =[],
}

import React from 'react'

export default function rewardReducer() {
    switch (action.type) {
        case NEW_REWARD:
            return state;

        case DEL_REWARD:
            return state;

        case MOVE_REWARD:
            return state;

        case SAVE_REWARDS:
            return state;

        default:
            return state;
    }
}
