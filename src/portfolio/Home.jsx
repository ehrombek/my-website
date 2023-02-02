import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';

const Home = () => {
    useEffect(() =>{
        AOS.init();
    })
    return (
        <div id='home'  className='con'>
                <header   data-aos="zoom-in"
                 className='hed'>
                    <div className="logo">EHROM<span>BEK.</span></div>
                    <ul>
                        <li><a  className='menu_class'  href="#home">Home</a></li>
                        <li><a  className='menu_class'  href="#about">About</a></li>
                        <li><a  className='menu_class'  href="#serv">Services</a></li>
                        <li><a  className='menu_class'  href="#blog">Blog</a></li>
                        <li><a  className='menu_class'  href="#contact">Contact</a></li>
                        <FontAwesomeIcon className='icon' icon={faBars} />
                        
                        <Navbar/>
                    </ul>
                </header>
                <div className="imgs">
                    <div data-aos="zoom-in" className="title">
                        <h1>Hello, my name is <br /> <span>Ehrom Sheraliev</span> <br /> I'm front-end developer and blogger!</h1>
                        <div className="code">
                            <FontAwesomeIcon className='icon' icon={faDownload} />
                            <a href="#">Download CV </a>
                            <div className="over"></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default Home;