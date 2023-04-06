import heroImg from '../assets/icons_assets/restauranfood.jpg'
import '../App.css'
import './CallToAction.css'
function CallToAction() {
    return (
        <div className="container hero" id='CallToAction'>
            <div className='hero-bg'></div>
            <div className='hero-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                <button className='homebtn'><a href='/booking'>Reserve a Table</a></button>
            </div>
            <div>
                <img src={heroImg} alt='restaurant'></img>
            </div>
        </div>
    )
}
export default CallToAction