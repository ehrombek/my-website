import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faInstagram, faGithub, faTwitterSquare, faLinkedin, faPinterest, faUbuntu, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';


const Contact = () => {

    useEffect(() =>{
        AOS.init();
    })

    return (
        <div id='contact'  className='contact'>
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-center" className='logs'>Contact <span>Me</span></h2>
            <div className="contact-c">
                <div  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="left-c" >
                    <div className="icons">
                        <h3> <FontAwesomeIcon className='icon' icon={faUser} /> Name: <br /> <span>Ehrom SHeraliev</span></h3>
                    </div>
                    <div className="icons">
                        <h3><FontAwesomeIcon className='icon' icon={faPhone} /> Number: <br /> <span>+998-93-880-25-35</span></h3>
                    </div>
                    <div className="icons">
                        <h3><FontAwesomeIcon className='icon' icon={faLocationDot} /> Location: <br /> <span>Fergana, Uzbekistan</span></h3>
                    </div>
                    <div className="icons">
                        <h3><FontAwesomeIcon className='icon' icon={faEnvelope} /> Email: <br /> <span>ehromsheraliev07@gmail.com</span></h3>
                    </div>
                </div>
                <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="right-c">
                    <form action="#">
                        <div className="inp">
                        <input type="name" placeholder='Your Name' required />  
                        </div>
                        <div className="inp">
                        <input type="email" placeholder='Your Email' required />  
                        </div>
                        <div className="inp">
                        <input type="text" placeholder='Subject' required />  
                        </div>
                        <div className="inp">
                        <input className='mes' type="text" placeholder='Your Message' required />  
                        </div>
                        <div className="btn">
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div data-aos="zoom-out-up" className="line"></div>
            </div>
        </div>
        
    );
};


export default Contact;