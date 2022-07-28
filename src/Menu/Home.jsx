import React from 'react';
import Common from './Common';
import Img from './img/AffectionateSeparateGazelle-size_restricted.gif';
const Home = () => {
    return (
        <div>
          <Common name='Grow your business with ' sub="We are the team of talented devloper making website" imgsrc={Img} visited='/about' btn='Get started'/>
        </div>
    );
};

export default Home;