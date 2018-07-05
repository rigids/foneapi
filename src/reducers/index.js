import { SET_PHONE } from '../actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

function mobiles(state=[], action){
  switch(action.type){
    case SET_PHONE:
      return { items:action.items , device: action.device };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  mobiles,
  form: formReducer
});

export default rootReducer;