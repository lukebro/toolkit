import React from 'react';
import './TwitterProfileCard.css';

function TwitterProfileCard({data}) {
  return (
  <div className="ProfileCard">
    <div className="ProfileCard__bg" style={{backgroundImage: `url(${data.user.profileBanner})`}}></div>
    <div className="ProfileCard__content">
      <div className="ProfileCard__content_top">
        <img src={data.user.profileImage} className="ProfileCard__avatar" />
        <div className="ProfileCard__identity">
          <div className="ProfileCard__name">{data.user.name}</div>
          <div className="ProfileCard__handle">{data.user.handle}</div>
        </div>
      </div>
    <div className="ProfileCard__info">
        {data.stats.map(stat => {
          return (
            <div className="ProfileCard__stat">
              <div className="ProfileCard__stat_name">{stat.key}</div>
              <div className="ProfileCard__stat_value">{stat.value}</div>
            </div>
          );
        })}
    </div>
    </div>
  </div>
  );
}

export default TwitterProfileCard;