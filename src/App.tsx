import './App.css';
import Input from './components/Input';
import DailyWeights from './components/DailyWeights';
import Weight from './models/weight';
import { useState } from 'react';

const App = () => {
  const [weights, setWeights] = useState<Weight[]>([]);

  const addWeightHandler = (enteredText: string) => {
    const newWeight = new Weight(enteredText);

    setWeights(prevWeights => {
      return prevWeights.concat(newWeight);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input onAddWeight={addWeightHandler} />
        <DailyWeights weights={weights} />
      </header>
    </div>
  );
};

export default App;
