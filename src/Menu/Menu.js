import { useState } from 'react';
import './Menu.css'

function Menu() {

    const [navbar, setNavbar] = useState(false)

    const [resnav, setResnav] = useState(false)

    const changeWidth = () => {
        if (window.scrollY > 0) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeWidth)

    return (
        <div className={navbar ? 'main-header active' : 'main-header'}>
            <div className={navbar ? 'container active' : 'container'}>
                <a href="" title="Divi Builder Layout Pack">Juice Shop Landing</a>
                <div className="top-navigation">
                    <nav className="top-menu-nav">
                        <ul className="top-menu">
                            <li className="li1"><a href="">Menu</a></li>
                            <li className="li2"><a href="" >Contact</a></li>
                            <li className="li3"><a href="">Shop</a></li>
                            <li className="li4"><a href="">Recipes</a></li>
                            <li className="li5"><a href="">Cleanses</a></li>
                            <li className="li6"><a href="">Home</a></li>
                            <li className="li7"><a href="">Landing</a></li>
                        </ul>
                    </nav>
                    <div className="et-cart-info">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="mobile-nav">
                        <button className="mobile-btn" onClick={() => { setResnav(!resnav) }}>
                            <span className="mobile-nav-icon">
                                <i className="fa-solid fa-bars"></i>
                            </span>
                        </button>
                        <ul className={resnav ? 'mobile-menu active' : 'mobile-menu'}>
                            <li><a href="">Landing</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Listing</a></li>
                            <li><a href="">Listings</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Financing</a></li>
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;