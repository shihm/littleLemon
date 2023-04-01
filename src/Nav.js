function Nav(){
    let pages=['Home','About','Menu','Reservations','Order online','Login']
    let navs=pages.map((value,i)=>{
        return <li key={i}>{value}</li>
    })
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a>Order online</a></li>
            <li><a>Login</a></li>
        </ul>
    )
}
export default Nav