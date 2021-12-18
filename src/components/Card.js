import React from 'react';
import '../styles/Card.css';

export default function Card({ title, url }) {
  return (
    <div className="character-card">
      <div className="card-bar">
        <p>{title}</p>
      </div>
      <img className="character-img" src={url} alt="title" />
    </div>
  );
}
