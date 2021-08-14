import Weight from '../../models/weight';

export enum ActionType {
  GET_WEIGHTS = 'GET_WEIGHTS',
  SUBMIT_WEIGHT = 'SUBMIT_WEIGHT',
  UPDATE_WEIGHT = 'UPDATE_WEIGHT',
  DELETE_WEIGHT = 'DELETE_WEIGHT',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
}

interface GetWeightsAction {
  type: ActionType.GET_WEIGHTS;
  payload: Weight[];
}

interface SubmitWeightAction {
  type: ActionType.SUBMIT_WEIGHT;
}

interface UpdateWeightAction {
  type: ActionType.UPDATE_WEIGHT;
  payload: string;
}

interface DeleteWeightAction {
  type: ActionType.DELETE_WEIGHT;
  payload: string;
}

interface LoadingAction {
  type: ActionType.LOADING;
}

export type WeightActions =
  | SubmitWeightAction
  | UpdateWeightAction
  | DeleteWeightAction
  | GetWeightsAction
  | LoadingAction;

export interface ErrorAction {
  type: ActionType.ERROR;
  payload: string;
}
