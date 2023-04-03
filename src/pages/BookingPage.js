import BookingForm from "../components/BookingForm"
function BookingPage(props){
    let availableTimes=props.availableTimes
    let setDate=props.setDate
    return <BookingForm availableTimes={props.availableTimes} setDate={props.setDate} />
}
export default BookingPage