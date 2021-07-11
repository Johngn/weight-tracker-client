import Weight from '../models/weight';
import DailyWeight from './DailyWeight';

const DailyWeights: React.FC<{ weights: Weight[] }> = props => {
  return (
    <ul>
      {props.weights.map(weight => (
        <DailyWeight key={weight.id} text={weight.text} />
      ))}
    </ul>
  );
};

export default DailyWeights;
