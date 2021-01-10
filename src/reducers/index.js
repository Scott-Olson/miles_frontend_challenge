import { combineReducers } from 'redux';
import rewardReducer from './rewardReducer';

export default combineReducers({
    rewards: rewardReducer,
});