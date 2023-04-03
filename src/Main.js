import React, { useReducer } from 'react';
import Homepage from "./pages/Homepage";
import BookingPage from './pages/BookingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function initializeTimes(date) {
    // TODO: Implement logic to get available times based on date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_DATE':
            return { date: action.payload.date, times: initializeTimes(action.payload.date) };
        default:
            return state;
    }
}
function Main() {
    const [state, dispatch] = useReducer(updateTimes, { date: '', times: [] });
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={state.times} setDate={(date) => dispatch({ type: 'SET_DATE', payload: { date } })} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main