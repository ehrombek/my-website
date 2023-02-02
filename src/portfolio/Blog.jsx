import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";

import blog1 from './imgs/blog1.jpg'
import blog2 from './imgs/blog2.jpg'
import blog3 from './imgs/blog3.jpg'
import blog4 from './imgs/blog4.jpg'
import blog5 from './imgs/blog5.jpg'
import blog6 from './imgs/blog6.jpg'

import work1 from './imgs/work/work1.jpg'
import work2 from './imgs/work/work2.jpg'
import work3 from './imgs/work/work3.jpg'
import work4 from './imgs/work/work4.jpg'
import work5 from './imgs/work/work5.jpg'
import work6 from './imgs/work/work6.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub, } from '@fortawesome/free-brands-svg-icons'


const Blog = () => {

    useEffect(() =>{
        AOS.init();
    })

    return (
        <div id='blog' className='blog'>
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-center">My <span>Work</span></h2>
               <p data-aos="fade-up"
     data-aos-anchor-placement="center-center">Here is some of my work that I've done in various programming languages.</p>
            <div data-aos="fade-up" className="blog-c">
                <div className="blog-con">
                    <img src={blog1} alt="" srcset="" />
                    <div className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                        
                       
                    </div>
                </div>

                <div data-aos="fade-right" className="blog-con">
                    <img src={blog2} alt="" srcset="" />
                    <div  className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                    </div>
                </div>

                <div data-aos="fade-up" className="blog-con">
                    <img src={blog3} alt="" srcset="" />
                    <div className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                    </div>
                </div>

                <div data-aos="fade-right"  className="blog-con">
                    <img src={blog4} alt="" srcset="" />
                    <div className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                    </div>
                </div>

                <div data-aos="fade-down" className="blog-con">
                    <img src={blog5} alt="" srcset="" />
                    <div className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                    </div>
                </div>

                <div className="blog-con">
                    <img data-aos="fade-left" src={blog6} alt="" srcset="" />
                    <div className="overs">
                        <h3>Project Source</h3>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon className="icon" icon={faGlobe } /></a>
                    </div>
                </div>
            </div>
            <div  data-aos="zoom-out" className="line"></div>

            <div className="portfolio">
                <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-center"><span>My</span> Portfolio </h2>

                 <div className="port">
                    <div data-aos="zoom-in" className="port-c">
                        <img  src={work1} alt="" srcset="" />
                        <h3>Create Beautiful Website</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                    <div data-aos="zoom-in" className="port-c">
                        <img  src={work2} alt="" srcset="" />
                        <h3>Create Graphic Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                    <div data-aos="zoom-in" className="port-c">
                        <img  src={work3} alt="" srcset="" />
                        <h3>Beautiful 2D & 3D Model</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                    <div data-aos="zoom-in" className="port-c">
                        <img  src={work4} alt="" srcset="" />
                        <h3>Freelance Online Jobs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                    <div data-aos="zoom-out-down" className="port-c">
                        <img  src={work5} alt="" srcset="" />
                        <h3>Working Team in GitHub</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                    <div data-aos="zoom-out-down" className="port-c">
                        <img  src={work6} alt="" srcset="" />
                        <h3>Creative Posts Writing </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe doloremque eveniet provident.</p>
                    </div>
                 </div>
                 <div data-aos="zoom-out-up" className="line"></div>
            </div>
        </div>
    );
};

export default Blog;