import React,{useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'



const Services = () => {
    useEffect(() =>{
        AOS.init();
    })
    return (
        <div id='serv' className='con serv'>
                <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-center" className='logs'>Services <span>Me</span></h2>
                <div className="serv-con">
                    <div data-aos="zoom-in-up" className="con-bar">
                        <FontAwesomeIcon className='icon' icon={faPalette} />
                        <h1>Graphic design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa corrupti maiores sapiente commodi quidem voluptatem sed temporibus iste! Possimus?</p>
                    </div>

                    <div data-aos="zoom-in-up" className="con-bar">
                        <FontAwesomeIcon className='icon' icon={faCode} />
                        <h1>Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa corrupti maiores sapiente commodi quidem voluptatem sed temporibus iste! Possimus?</p>
                    </div>

                    <div data-aos="zoom-in-up" className="con-bar">
                        <FontAwesomeIcon className='icon' icon={faCopyright} />
                        <h1>Copywriting</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa corrupti maiores sapiente commodi quidem voluptatem sed temporibus iste! Possimus?</p>
                    </div>

                    <div data-aos="zoom-in-up" className="con-bar">
                        <FontAwesomeIcon className='icon' icon={faBolt} />
                        <h1>Blogger</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa corrupti maiores sapiente commodi quidem voluptatem sed temporibus iste! Possimus?</p>
                    </div>
                </div>
                <div  data-aos="zoom-out" className="line"></div>

                <div className="skills">
                    <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-center">My <span>Skills</span></h2>
                    <div className="s-bar">
                        <p data-aos="fade-up"
     data-aos-anchor-placement="center-center" className='p'>My creative skills and experience, my stats.</p>
                    <div data-aos="fade-down" class="all">
  <div class="circle-wrap">
    <div class="circle">
      <div class="mask full-1">
        <div class="fill-1"></div>
      </div>
      <div class="mask half">
        <div class="fill-1"></div>
      </div>
      <div class="inside-circle"> 85% <br/> HTML</div>

        
    </div>

  </div>
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full-2">
          <div class="fill-2"></div>
        </div>
        <div class="mask half">
          <div class="fill-2"></div>
        </div>
        <div class="inside-circle"> 80% <br/> CSS</div>
      </div>
    </div>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full-3">
            <div class="fill-3"></div>
          </div>
          <div class="mask half">
            <div class="fill-3"></div>
          </div>
          <div class="inside-circle"> 60% <br/> JS </div>
        </div>
      </div>

      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full-3">
            <div class="fill-3"></div>
          </div>
          <div class="mask half">
            <div class="fill-3"></div>
          </div>
          <div class="inside-circle"> 60% <br/> JQuery </div>
        </div>
      </div>

      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full-4">
            <div class="fill-4"></div>
          </div>
          <div class="mask half">
            <div class="fill-4"></div>
          </div>
          <div class="inside-circle"> 50% <br/>React JS </div>
        </div>
      </div>

      <div class="circle-wrap wraps">
        <div class="circle">
          <div class="mask full-4">
            <div class="fill-4"></div>
          </div>
          <div class="mask half">
            <div class="fill-4"></div>
          </div>
          <div class="inside-circle"> 50% <br/>Python</div>
        </div>
      </div>

    </div>
                    </div>                    
                    <div  data-aos="zoom-out" className="line"></div>

                </div>
        </div>
    );
};

    {
        const numb = document.querySelector(".numb")
        let counter = 0;
        setInterval(() => {
            if(counter ==100) {
                clearInterval()
            }else{
                counter+=1;
                numb.textContent = counter + "%"
            }

        }, 100); 
    }


export default Services;