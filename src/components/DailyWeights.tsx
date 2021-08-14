import DailyWeight from './DailyWeight';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeights } from '../state/action-creators';

const DailyWeights = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const getDailyWeights = bindActionCreators(getWeights, useDispatch());
  const dailyWeightValues = useTypedSelector(
    state => state.weights.dailyWeightValues
  );

  useEffect(() => {
    getDailyWeights();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(dailyWeightValues);
  }, [dailyWeightValues]);

  return (
    <>
      <h2>Daily Weights:</h2>
      <ul>
        {dailyWeightValues.map(weight => (
          <DailyWeight key={weight._id} text={weight.text} />
        ))}
      </ul>
    </>
  );
};

export default DailyWeights;
