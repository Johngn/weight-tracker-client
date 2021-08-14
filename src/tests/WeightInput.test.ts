import { render, screen, cleanup } from '@testing-library/react';
import WeightInput from '../components/WeightInput';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('WeightInput component', () => {
  test('renders input', () => {
    render(<WeightInput />);

    const inputElement = screen.getByTestId('input-1');
    expect(inputElement).toBeInTheDocument();
  });

  // test('renders false if button NOT clicked', () => {
  //   render(<WeightInput  onSubmitWeight={enteredText => void}/>);

  //   const textElement = screen.getByText('false', { exact: false });
  //   expect(textElement).toBeInTheDocument();
  // });

  // test('renders true if button IS clicked', () => {
  //   render(<WeightInput onSubmitWeight={enteredText => void} />);

  //   const buttonElement = screen.getByRole('button');
  //   userEvent.click(buttonElement);

  //   const textElement = screen.getByText('true', { exact: false });
  //   expect(textElement).toBeInTheDocument();
  // });

  // test('does not render false if button IS clicked', () => {
  //   render(<WeightInput onSubmitWeight={enteredText => void} />);

  //   const buttonElement = screen.getByRole('button');
  //   userEvent.click(buttonElement);

  //   const textElement = screen.queryByText('false', { exact: false });
  //   expect(textElement).toBeNull();
  // });
});

// describe('Async component', () => {
//   test('renders posts if request succeeds', async () => {
//     render(<Async />);

//     const listItemElements = await screen.findAllByRole('listitem');
//     expect(listItemElements).not.toHaveLength(0);
//   });
// });
