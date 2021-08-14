import { render, screen, cleanup } from '@testing-library/react';
import DailyWeights from '../components/DailyWeights';

afterEach(cleanup);

describe('DailyWeights component', () => {
  test('it renders', () => {
    render(<DailyWeights >);

    expect(screen.getByText('Daily Weights:')).toBeInTheDocument();
  });

  test('renders the list of weights', () => {});
});
