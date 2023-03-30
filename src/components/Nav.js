function Nav(){
    let pages=['Home','About','Menu','Reservations','Order online','Login']
    let navs=pages.map((value,i)=>{
        return <li key={i}>{value}</li>
    })
    return <ul>{navs}</ul>
}
export default Nav