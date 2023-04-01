import CallToAction from "../components/CallToAction"
import Specials from "../components/Specials"
import Chicago from "../components/Chicago"
import CustomersSay from "../components/CustomersSay"
function Homepage() {
    return (
        <>
            <CallToAction />
            <Specials id='Specials' />
            <CustomersSay id='CustomersSay' />
            <Chicago id='Chicago' />
        </>
    )
}
export default Homepage