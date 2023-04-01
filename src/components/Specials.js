import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import '../App.css'

function Dish(props) {
    return (
        <div className="dish">
            <img src={props.picture} alt={props.name}></img>
            <div style={{ display: "flex" }}>
                <h2>{props.name}</h2>
                <div>${props.price}</div>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}
function Specials() {
    let DishData = [
        { name: 'Greek Salad', picture: greekSalad, desc: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.', price: 12.99 },
        { name: 'Bruchetta', picture: bruchetta, desc: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.', price: 5.99 },
        { name: 'Lemon Dessert', picture: lemonDessert, desc: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.', price: 5.00 }
    ]
    let Dishes = DishData.map(item => {
        return <Dish name={item.name} picture={item.picture} desc={item.desc} price={item.price} />
    })
    return (
        <div className='container specials' id='Menu'>
            {Dishes}
        </div>
    )
}

export default Specials