import { render, screen, fireEvent } from '@testing-library/react';
import ChatContainer from './ChatContainer';

// sends user message and display it
test('displays user message after sending', () => {

    render(<ChatContainer />);

    const input = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello there!' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('Hello there!')).toBeInTheDocument();

});

// displays bot response
test('displays bot message in response', async () => {

    render(<ChatContainer />);

    const input = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello there!' } });
    fireEvent.click(sendButton);

    const response = await screen.findAllByText(/This is a simulated response\.|Interesting question!|Nice insight!|Thanks for your input!|Absolutely! Here's a detailed explanation of\.\.\.|Thanks for sharing that!/);
    expect(response.length).toBeGreaterThan(0);
});




