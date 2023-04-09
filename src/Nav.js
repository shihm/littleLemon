import { useState } from 'react';
import './Nav.css';
import menuIcon from './assets/icons_assets/🦆 icon _hamburger menu.svg';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav aria-label="Main Navigation">
            <img src={menuIcon} alt='Menu' className='menu-icon' onClick={toggleMenu} />
            <ul className={isMenuOpen ? "" : "menu-toggle"}>
                <li><a href="/">Home</a></li>
                <li><a href="/constructing">About</a></li>
                <li><a href="/constructing">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/constructing">Order</a></li>
                <li><a href="/constructing">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
