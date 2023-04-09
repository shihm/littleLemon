import { useLocation } from 'react-router-dom';
import '../App.css'

function ConfirmBooing() {
    const location = useLocation();
    const formData = location.state.formData;
    return (
        <div className='page'>
            <h1>Reservation Confirmed</h1>
            <p>
                We are pleased to confirm your reservation for {formData.date} at {formData.time} for a table of {formData.guests} guests.
                Thank you for choosing Little Lemon for your {formData.occasion}.
            </p>
        </div>
    )
}
export default ConfirmBooing;