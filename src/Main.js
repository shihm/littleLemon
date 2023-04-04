import React, { useReducer } from 'react';
import Homepage from "./pages/Homepage";
import BookingPage from './pages/BookingPage';
import VoidPage from './pages/VoidPage';
import { fetchAPI } from './api.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function initializeTimes() {
    const today = new Date();
    return {date:today,times:fetchAPI(today)};
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_DATE':
            return { date: state.date, times: fetchAPI(state.date) };
        default:
            return initializeTimes();
    }
}
function Main() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={state.times} setDate={(date) => dispatch({ type: 'SET_DATE', state: { date } })} />}></Route>
                <Route path="/constructing" element={<VoidPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main