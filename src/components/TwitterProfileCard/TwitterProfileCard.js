import React from 'react';
import './TwitterProfileCard.css';

function TwitterProfileCard({ data }) {
  return (
    <div className="ProfileCard">
      <a>
        <div className="ProfileCard__bg" style={{ backgroundImage: `url(${data.user.profileBanner})` }}></div>
      </a>
      <div className="ProfileCard__content">
        <div className="ProfileCard__user">
          <a className="ProfileCard__imageLink">
            <img src={data.user.profileImage} className="ProfileCard__image" alt="Profile avatar" />
          </a>
          <div className="ProfileCard__fields">
            <a className="ProfileCard__name">{data.user.name}</a>
            <a className="ProfileCard__handle">{data.user.handle}</a>
          </div>
        </div>
        <ul className="ProfileCard__stats">
          {data.stats.map((stat, i) => {
            return (
              <li key={i} href={stat.url} className="ProfileCard__stat">
                <a href={stat.url} className="ProfileCard__statLink">
                  <span className="ProfileCard__label">{stat.key}</span>
                  <span className="ProfileCard__value">{stat.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TwitterProfileCard;