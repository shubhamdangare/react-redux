import { combineReducers } from 'redux';
import ItemReducer from './item-reducer'

const rootReducer = combineReducers({
  item : ItemReducer,
});

export default rootReducer;
