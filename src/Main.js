import React, { useReducer } from 'react';
import Homepage from "./pages/Homepage";
import BookingPage from './pages/BookingPage';
import VoidPage from './pages/VoidPage';
import ConfirmBooing from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api.js';

import { Routes, Route, useNavigate } from "react-router-dom";


function initializeTimes() {
    const today = new Date();
    return { date: today, times: fetchAPI(today) };
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
    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirm', { state: { formData } });
        };
    };
    return (
        <Routes>
            <Route path="/" element={<Homepage />} aria-label="Home"></Route>
            <Route
                path="/booking"
                element={
                    <BookingPage
                        availableTimes={state.times}
                        updateTimes={(date) =>
                            dispatch({ type: "SET_DATE", state: { date } })
                        }
                        submitForm={(formData) => submitForm(formData)}
                    />
                }
                aria-label="Booking"
            ></Route>
            <Route
                path="/confirm"
                element={<ConfirmBooing />}
                aria-label="Confirmation"
            ></Route>
            <Route
                path="/constructing"
                element={<VoidPage />}
                aria-label="Under Construction"
            ></Route>
        </Routes>

    )
}
export { updateTimes, initializeTimes}
export default Main;