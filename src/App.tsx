import { Provider } from 'react-redux';
import store from './state/store';

import WeightContainer from './components/WeightContainer';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <WeightContainer />
      </div>
    </Provider>
  );
};

export default App;
