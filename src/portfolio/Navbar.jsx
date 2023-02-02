import React,{useState} from 'react';
import './style.css';

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <div style={{width: "100%", height: "100%"}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <div className="h3">
                    <a className="h5 menu_class" href="#home">Home</a>
                    <a className="h5 menu_class" href="#about">About</a>
                    <a className="h5 menu_class" href="#serv">Services</a>
                    <a className="h5 menu_class" href="#blog">Blog</a>
                    <a className="h5 menu_class" href="#contact">Contact</a>
                </div>
                {/* <div className="line lines"></div> */}
            </div>
        </div>
    );
};

export default Navbar;