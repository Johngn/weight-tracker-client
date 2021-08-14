import { ActionType, WeightActions } from '../action-types';
import Weight from '../../models/weight';

interface WeightState {
  loading: boolean;
  dailyWeightValues: Weight[];
}

const initialState = {
  loading: false,
  dailyWeightValues: [],
};

const weightReducer = (
  state: WeightState = initialState,
  action: WeightActions
): WeightState => {
  switch (action.type) {
    case ActionType.SUBMIT_WEIGHT:
      return {
        ...state,
        loading: false,
      };

    case ActionType.GET_WEIGHTS:
      return {
        ...state,
        dailyWeightValues: action.payload,
      };

    default:
      return state;
  }
};

export default weightReducer;
