import BookingForm from "../components/BookingForm"
function BookingPage(props){
    return <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes} submitForm={props.submitForm}/>
}
export default BookingPage