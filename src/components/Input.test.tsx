import { render, screen, cleanup } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Input component', () => {
  test('renders learn react link', () => {
    render(<Input />);

    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders false if button NOT clicked', () => {
    render(<Input />);

    const textElement = screen.getByText('false', { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test('renders true if button IS clicked', () => {
    render(<Input />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.getByText('true', { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test('does not render false if button IS clicked', () => {
    render(<Input />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.queryByText('false', { exact: false });
    expect(textElement).toBeNull();
  });
});
