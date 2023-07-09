import React from 'react';
import hospitalPartnerImage from '../images/International.jpg'; // Replace with the path to the hospital partner image
import apolloLogo from '../images/Apollo.png'; // Replace with the path to the Apollo Hospitals logo
import msRamaiahLogo from '../images/Ramaiah.jpg'; // Replace with the path to the MS Ramaiah Hospital logo
import Award1 from '../images/Award1.png';
import Award2 from '../images/Award2.jpg';
import style from './hospitalPartnerPage.module.css';

const HospitalPartnerPage = () => {
  return (
    <div>
      <h1>Hospital Partner</h1>
      <img src={hospitalPartnerImage} alt="Hospital Partner" className={style['partner-image']} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, quam a fermentum commodo, tellus nunc malesuada massa, eu
        posuere velit ex in neque. Nullam auctor tellus in quam vehicula, at aliquet quam efficitur. Nam consectetur lacus id risus aliquet
        pellentesque.
      </p>
      <h2>Award</h2>
      <div className={style['award-container']}>
        <img src={Award2} alt="Award" className={style['award-image'] } />
        <p>
          Sed non semper justo. Pellentesque ut massa sit amet nulla facilisis convallis. Ut bibendum leo in orci lobortis rhoncus. Suspendisse
          id sapien odio. Phasellus bibendum metus vitae facilisis fringilla. Quisque convallis venenatis mi, at rutrum velit rutrum nec.
          Phasellus volutpat tellus nec mi fermentum rutrum. Sed euismod ultrices massa eget bibendum.
        </p>
      </div>
      <h2>Our Partners</h2>
      <div className={style['partner-container']}>
        <img src={apolloLogo} alt="Apollo Hospitals" className={style['partner-logo']} />
        <img src={msRamaiahLogo} alt="MS Ramaiah Hospital" className={style['partner-logo']} />
      </div>
    </div>
  );
};

export default HospitalPartnerPage;
