import { combineReducers } from 'redux';
import {roomsReducer} from './rooms-reducer';
import {dateReducer, timeReducer} from './datetime-reducer';
import { qrReducer } from './camera-reducer';

export default combineReducers({  
  roomsReducer,
  dateReducer,
  timeReducer,
  qrReducer
});
