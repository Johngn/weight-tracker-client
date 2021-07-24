import { combineReducers } from 'redux';
import weightReducer from './weightReducer';

const reducers = combineReducers({
  weights: weightReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
