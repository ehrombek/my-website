import React,{useState} from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


const Send = () => {

    return (
        <div>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
            <Footer/>
        </div>

    );
};

export default Send;