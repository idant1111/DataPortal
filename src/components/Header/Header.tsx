import React from 'react';
import './Header.css'

import LogoIcon  from '../../assets/logo.svg'
import HomeIcon  from '../../assets/Home.svg'
import ExploreIcon  from '../../assets/Explore.svg'
import UserIcon  from '../../assets/User.svg'
import DashboardIcon  from '../../assets/dashboard.svg'
const Header: React.FC = () => {
  return (
    <>
      <nav>
        <div className='navbar'>
          <a href="/" className='navbar-brand'> <img id="bgn-img-nav" src={LogoIcon} alt='logo'/></a> 
          
          <ul className='navbar'>
              <a href="/" className='nav-link'><img id="bgn-img-nav" src={HomeIcon} alt='logo'/><br/>Home</a>
          </ul>
          <ul className='navbar'>
              <a href="/dashboards" className='nav-link'><img id="bgn-img-nav" src={DashboardIcon} alt='logo'/><br/>Dashboards</a>
          </ul>
          <ul className='navbar'>
              <a href="/explore" className='nav-link'><img id="bgn-img-nav" src={ExploreIcon} alt='logo'/><br/>Explore</a>
          </ul>
          <ul className='navbar'>
              <a href="/profile" className='nav-link'><img id="bgn-img-nav" src={UserIcon} alt='logo'/><br/>User</a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
