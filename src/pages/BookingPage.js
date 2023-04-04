import BookingForm from "../components/BookingForm"
function BookingPage(props){

    return <BookingForm availableTimes={props.availableTimes} setDate={props.setDate} />
}
export default BookingPage