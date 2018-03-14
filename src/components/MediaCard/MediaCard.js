import React from 'react';
import './MediaCard.css';

function MediaCard({ image, author }) {
  return (
    <div className="MediaCard">
      <div className="MediaCard__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="MediaCard__content">

        <div className="MediaCard__body">
          <h2 className="MediaCard__header">My favorite cookie recipes of {new Date().getFullYear()}</h2>
          <p className="MediaCard__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ducimus culpa odit deserunt omnis sint velit perspiciatis, quisquam saepe obcaecati.
          </p>
        </div>

        <div className="MediaCard__author">
          <img src={author.image} className="MediaCard__author-image" alt={author.name} />
          <div className="MediaCard__author-name">{author.name}</div>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;