import { Provider } from 'react-redux';
import store from './state/store';

import WeightContainer from './components/WeightContainer';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <WeightContainer />
    </Provider>
  );
};

export default App;
