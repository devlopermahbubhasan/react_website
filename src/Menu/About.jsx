import React from 'react';
import Common from './Common';
import Img from './img/track-building-and-facilities-assets-with-cloudapper-cmms-software.png';
const About = () => {
    return (
        <div>
           <Common name='Welcome to about page' sub="We are the team of talented devloper making website" imgsrc={Img} visited='/contact' btn='Contact Now'/>
        </div>
    );
};

export default About;