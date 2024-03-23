import React from 'react';
import './Cards.css';
import ExpandIcon from '../../assets/card-assets/ExpandIcon.svg';
import ShareIcon from '../../assets/card-assets/ShareIcon.svg';
import FavoriteIcon from '../../assets/card-assets/FavoriteIcon.svg';
import LikeIcon from '../../assets/card-assets/LikeIcon.svg';

const Cards: React.FC = () => {
  return (
    <div className="card">
      <img id='card-icons' src={ExpandIcon} alt="Expand Icon" style={{ width: '1rem', height: '1rem' }} />
      <img id='card-icons' src={ShareIcon} alt="Expand Icon" style={{ width: '1rem', height: '1rem' }} />
      <div className="container">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: '5rem', height: '5rem' }} />
        <div className='card-title'><b>John Doe</b></div>
        <div className='card-content'>Architect & Engineer</div>
        <div className='card-footer'>
          <img id='card-icons' src={FavoriteIcon} alt="Expand Icon" style={{ width: '1rem', height: '1rem' }} />
          <img id='card-icons' src={LikeIcon} alt="Expand Icon" style={{ width: '1rem', height: '1rem' }} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
