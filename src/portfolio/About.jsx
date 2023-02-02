import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import main from './imgs/mains.png'

const About = () => {
    useEffect(() =>{
        AOS.init();
    })

    return (
        <div id='about' className='about'>
                <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-center" className='logs'>About <span>Me</span></h2>
            <div className="cons">
                <div data-aos="fade-up"
     data-aos-duration="3000" className="img">
                    <img src={main} alt="" srcset="" />
                </div>
                <div data-aos="fade-down"
     data-aos-duration="3000" className="words">
                    <h2>I'm Ehrom Sheraliev</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde illo culpa velit similique voluptates dolore? Ipsa omnis dolores laboriosam quod repellendus? Recusandae, omnis accusantium consequuntur distinctio asperiores labore voluptas.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde illo culpa velit similique voluptates dolore? Ipsa omnis dolores laboriosam quod repellendus? Recusandae, omnis accusantium consequuntur distinctio asperiores labore voluptas.</p>
                    <a href="#">See More</a>
                </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="skills">
            <div className="bar">
                    <h3>1 <br /> Years of experience</h3>
            </div>

            <div className="bar">
                    <h3>50+ <br /> Of completed projects</h3> 
            </div>
            <div className="bar">
                    <h3>10+ <br /> Happy customers</h3>
            </div>
            <div className="bar">
                    <h3>5+ <br /> Awards won</h3>
            </div>
            </div>
            <div  data-aos="zoom-out" className="line"></div>    
        </div>
    );
};

export default About;