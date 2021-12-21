import React from 'react';
import './HeroSimplified.css';
import * as icon from '../../assets/icons';
import { Link } from 'react-router-dom';

function HeroSimplified({ name, imgUrl, powerstats }) {
  const heroId = powerstats.id;
  return (
    <Link className='featured__hero' to={`/hero/${heroId}`}>
        <h2>{name}</h2>
        <img className='featured__hero__img' src={imgUrl} alt={name} />
        <div className='featured__hero__stats'>
          {Object.entries(powerstats).map(([key, value]) => {
              if (key === 'response' || key === 'id' || key === 'name' || key === 'power') {
                return '';
              }

              return (
              <div key={`icon-${heroId}-${key}`}>
                <img className='featured__hero__stats__icon' src={icon[key]} alt={`${key} icon`} />
                <p>{value}</p>
              </div>
              )
            })}
        </div>
    </Link>
  );
}

export default HeroSimplified;
