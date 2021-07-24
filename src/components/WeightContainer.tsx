import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitWeight } from '../state/action-creators';

import WeightInput from '../components/WeightInput';
import DailyWeights from '../components/DailyWeights';
import Weight from '../models/weight';

const WeightContainer = () => {
  const submitWeightAction = bindActionCreators(submitWeight, useDispatch());

  const submitWeightHandler = (enteredText: string) => {
    const newWeight = new Weight(enteredText);

    submitWeightAction(newWeight);
  };

  return (
    <>
      <WeightInput onSubmitWeight={submitWeightHandler} />
      <DailyWeights />
    </>
  );
};

export default WeightContainer;
