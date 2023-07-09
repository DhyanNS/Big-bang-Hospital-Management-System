import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import personal1 from '../images/personal1.png';
import personal2 from '../images/personal2.jpg';
import personal3 from '../images/personal3.jpg';
import personal4 from '../images/personal4.jpg';
import homestyle from './home.module.css';
import logo from '../images/Logo.png';
import HospitalPartnerPage from './HospitalPartnerPage';


const Home = () => {
  const Logo = logo; // Replace with the path to your logo image
  const image1 = personal1; // Replace with the path to your first carousel image
  const image2 = personal2; // Replace with the path to your second carousel image
  const image3 = personal3;
  const image4 = personal4; // Replace with the path to your third carousel image

  return (
    <div className={homestyle['home-container']}>
      <img src={Logo} alt="Full-screen" className={homestyle['fullscreen-image']} />
      <div className={homestyle['fullscreen-image-container']}>
        <Carousel autoPlay>
          <div>
            <img src={image1} alt="Image 1" />
            <p className="legend">Hospital Operations means any one or more operations carried on or services provided by any of the Joint Ventures as presently carried on or provided, which includes the operations of the Hospitals and any portion thereof.</p>
          </div>
          <div>
            <img src={image2} alt="Image 2" />
            <p className="legend">Operations management in healthcare is responsible for ensuring patient safety.</p>
          </div>
          <div>
            <img src={image3} alt="Image 3" />
            <p className="legend">These professionals direct a hospital or healthcare facility's staffing, resources, finances, and procedures</p>
          </div>
          <div>
            <img src={image4} alt="Image 4" />
            <p className="legend">Operations management is the overall coordination of processes required for the creation and distribution of products and services. </p>
          </div>
        </Carousel>
        <HospitalPartnerPage />
      </div>
    </div>
  );
};

export default Home;
