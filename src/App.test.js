import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';

import { fetchAPI, submitAPI } from './api.js';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { initializeTimes, updateTimes } from './Main';


test('Main renders with BrowserRouter', () => {
    render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
    // add more assertions as needed
});


test('initializeTimes returns current date and times from API', () => {
    const today = new Date();
    const expected = { date: today, times: fetchAPI(today) };
    expect(initializeTimes()).toEqual(expected);
});


test('updateTimes returns updated state with new date', () => {
    const state = { date: new Date(), times: [] };
    const action = { type: 'SET_DATE', state: { date: new Date() } };
    const expected = { date: new Date(), times: fetchAPI(new Date()) };
    expect(updateTimes(state, action)).toEqual(expected);
});

test('Renders the BookingForm heading', () => {
    const availableTimes = ['17:00 AM', '18:00 AM', '19:00 PM'];
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('submits form with valid data', () => {
    const availableTimes = ['17:00 AM', '18:00 AM', '19:00 PM'];
    const mockUpdateTimes = jest.fn();
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={availableTimes} updateTimes={mockUpdateTimes} submitForm={mockSubmit} />);
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Select occasion');
    const submitButton = screen.getByLabelText('Submit booking form');
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(timeInput, { target: { value: '17:00 AM' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
    fireEvent.click(submitButton);
    expect(mockUpdateTimes).toHaveBeenCalledWith('2022-01-01');
    expect(mockSubmit).toHaveBeenCalledWith({
        date: '2022-01-01',
        time: '17:00 AM',
        guests: '2',
        occasion: 'Birthday',
    });
});