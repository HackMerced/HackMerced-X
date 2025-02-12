import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else
        {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const closeMenu = () => {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
        setIsMenuClicked(false);
    };

    return(
        <div style={{width: '100%', height: '100%'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
    
            <div className={menu_class}>
                <div className="menu-buttons">
                    <ul>
                        <li><Link to="/"><button className="burger-button" id="about-us-button" onClick={closeMenu}>Home</button></Link></li> 
                        <li><Link to="/aboutus"><button className="burger-button" id="about-us-button" onClick={closeMenu}>Prizes</button></Link></li> 
                        <li><Link to="/contactus"><button className="burger-button" id="schedule-button" onClick={closeMenu}>Schedule</button></Link></li> 
                        <li><Link to="/sponsorus"><button className="burger-button" id="punch-card-button" onClick={closeMenu}>PunchCard</button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;