import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

const featuredHeroesIds = [620, 502, 10];

function FeaturedHeroes() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesIds) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    setFeaturedHeroesList(heroes);
  }

  return (
    <section className='featured'>
      <div className='featured__list'>
        {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
          <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedHeroes;
