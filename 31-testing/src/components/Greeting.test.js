import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    //Act : Nothing to do here

    //Assert *Here no Regex, but it can be used*
    const helloWorldElement = screen.getByText('Hello World!', {
      exact: false,
    });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', {
      exact: false,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    render(<Greeting />);

    // Act : Clicking the button
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Changed!');

    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    // Act : Clicking the button
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
