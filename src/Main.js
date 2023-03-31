import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main