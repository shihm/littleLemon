import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import '../App.css'

function Dish(props){
    return(
        <div className="dish">
            <img src={props.picture}></img>
            <div style={{display:"flex"}}>
                <h2>{props.name}</h2>
                <div>${props.price}</div>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}
function Specials(){
    return (
        <div className='container specials'>
            <Dish name='Greek Salad' picture={greekSalad} desc='A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.' price='12.99' />
            <Dish name='Bruchetta' picture={bruchetta} desc='A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.' price='5.99' />
            <Dish name='Lemon Dessert' picture={lemonDessert} desc='A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.' price='5.00' />
        </div>
    )
}

export default Specials