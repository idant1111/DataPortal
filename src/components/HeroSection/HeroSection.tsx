import React from 'react';
import './HeroSection.css';
import Mantra from '../../assets/Mantra.svg'
import RockerIcon from '../../assets/Rocket.svg'
// import SearchBar from '../SearchBar/SearchBar';
import Cubes from '../../assets/cubes1.svg'
import People1 from '../../assets/PeopleImg1.svg'
import ScreenDimmer from '../ScreenDimmer/ScreenDimmer';

const HeroSection: React.FC = () => {
  return (
    <>
        <div>
        <img className="rocket-img" src={RockerIcon} alt='rocket'/><br/>
        </div>
        <div className="HeroSection">
        <img className="hero-section-mantra" src={Mantra} alt='mantra'/>
        </div>
        <ScreenDimmer />
        <div>
        <img className="Cubes1" src={Cubes} alt='cubes'/>
        </div>
        <div>
        <img className="People1" src={People1} alt='people'/>
        </div>
        </>
  );
}

export default HeroSection;
