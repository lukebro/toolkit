import React from 'react';
import './Gamestrip.css';
import mask from './mask.svg';

function Gamestrip({ home, away, status }) {
  return (
    <header className="Gamestrip">
      <div className="Gamestrip__container">
        <div className="Gamestrip__team Gamestrip__team--away">
          <img className="Gamestrip__team-logo" src={away.logo} alt="Away team loo" />
          <div className="Gamestrip__team-info">
            <span className="Gamestrip__team-name">{away.name}</span>
            <span className="Gamestrip__team-record">{away.record}</span>
          </div>
          <div className="Gamestrip__banner" style={{ backgroundColor: away.color }}>
            <img src={mask} className="Gamestrip__banner-mask" alt="" />
            <img src={away.logo} className="Gamestrip__banner-image" alt="Away team banner" />
            <img src={mask} className="Gamestrip__banner-mask Gamestrip__banner-mask--reversed" alt="" />
          </div>
        </div>
        <div className="Gamestrip__status">
          <span className="Gamestrip__status-text">ESPN</span>
          <span className="Gamestrip__status-time">7:00 PM ET</span>
          <span className="Gamestrip__status-text">DET -3.0</span>
        </div>
        <div className="Gamestrip__team Gamestrip__team--home">
          <img className="Gamestrip__team-logo" src={home.logo} alt="Home team logo" />
          <div className="Gamestrip__team-info">
            <span className="Gamestrip__team-name">{home.name}</span>
            <span className="Gamestrip__team-record">{home.record}</span>
          </div>
          <div className="Gamestrip__banner" style={{ backgroundColor: home.color }}>
            <img src={mask} className="Gamestrip__banner-mask" alt="" />
            <img src={home.logo} className="Gamestrip__banner-image" alt="Home team banner" />
            <img src={mask} className="Gamestrip__banner-mask Gamestrip__banner-mask--reversed" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Gamestrip;