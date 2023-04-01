import heroImg from '../assets/icons_assets/restauranfood.jpg'
import '../App.css'
function CallToAction() {
    return (
        <div className="container hero" id='CallToAction'>
            <div>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            </div>
            <div>
                <img src={heroImg} alt='restaurant'></img>
            </div>
        </div>
    )
}
export default CallToAction