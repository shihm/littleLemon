import { render, screen } from '@testing-library/react';
import Main from './Main';

// A test to check if the Main component renders correctly
test('renders Main component', () => {
    render(<Main />);
    const linkElement = screen.getByText(/Little Lemon/i);
    expect(linkElement).toBeInTheDocument();
});

//A test to check if the updateTimes() function in main.js is  working correctly
test('updateTimes() function', () => {
    const state = { date: '', times: [] };
    const action = { type: 'SET_DATE', payload: { date: '2021-01-01' } };
    const newState = updateTimes(state, action);
    expect(newState.date).toBe('2021-01-01');
    expect(newState.times.length).toBe(13);
}   );