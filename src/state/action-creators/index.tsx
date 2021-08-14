import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, WeightActions, ErrorAction } from '../action-types';
import Weight from '../../models/weight';

export const submitWeight = (weight: Weight) => {
  return async (dispatch: Dispatch<WeightActions | ErrorAction>) => {
    try {
      await axios.post(`http://localhost:5000/api/weights`, weight, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({
        type: ActionType.SUBMIT_WEIGHT,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.ERROR,
        payload: err.message,
      });
    }
  };
};

export const getWeights = () => {
  return async (dispatch: Dispatch<WeightActions | ErrorAction>) => {
    dispatch({
      type: ActionType.LOADING,
    });

    try {
      const res = await axios.get(`http://localhost:5000/api/weights`);

      const dailyWeightValues = res.data;

      dispatch({
        type: ActionType.GET_WEIGHTS,
        payload: dailyWeightValues,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.ERROR,
        payload: err.message,
      });
    }
  };
};
