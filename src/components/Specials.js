import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import '../App.css'
import './Specials.css'

function Dish(props) {
    return (
        <div className="dish">
            <img src={props.picture} alt={props.name}></img>
            <div className='dishTitle'>
                <h3>{props.name}</h3>
                <div>${props.price}</div>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}
function Specials() {
    let DishData = [
        { name: 'Greek Salad', picture: greekSalad, desc: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.', price: 12.99 },
        { name: 'Bruchetta', picture: bruchetta, desc: 'An antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.', price: 5.99 },
        { name: 'Lemon Dessert', picture: lemonDessert, desc: 'A dessert pie consisting of a shortened pastry base filled with lemon curd and topped with meringue.', price: 5.00 }
    ]
    let Dishes = DishData.map(item => {
        return <Dish name={item.name} key={item.name} picture={item.picture} desc={item.desc} price={item.price} />
    })
    return (
        <>
        <div className='specialTitle'>
            <h2>This weeks specials!</h2>
            <button className='homebtn'><a href='/constructing'>Online Menu</a></button>
        </div>
        <div className='container specials'>
            {Dishes}
        </div>
        </>
    )
}

export default Specials