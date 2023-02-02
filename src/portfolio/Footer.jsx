import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faInstagram, faGithub, faTwitterSquare, faLinkedin, faPinterest, faUbuntu, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    useEffect(() =>{
        AOS.init();
    })

    return (
        <div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="footer">
                <h3>Created by <a href="#"><span> <FontAwesomeIcon className='icon' icon={faCopyright}/> Ehrom SHeraliev</span></a> | All right reserved.</h3>
                <div className="icons">
                    <p>Follow me:</p>
                    <a href="https://github.com/ehrombek" target='_blank'><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    <a href="https://telegram.me/ehromsheraliev"  target='_blank'><FontAwesomeIcon className='icon' icon={faTelegram}/></a>
                    <a href="https://twitter.com/ehromsheraliev"  target='_blank'><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
                    <a href="https://instagram.com/ehromsheraliev"  target='_blank'><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
                    <a href="https://pinterest.com/ehromsheraliev"  target='_blank'><FontAwesomeIcon className='icon' icon={faPinterest}/></a>
                    <a href="https://www.linkedin.com/in/ehrom-sheraliev-8a953a255"  target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;