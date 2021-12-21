import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';

const featuredHeroesIds = [620, 502, 10];

function FeaturedHeroes() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesIds) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    setFeaturedHeroesList(heroes);
    setLoadingState(false);
  }

  return (
    <section className='featured'>
      <h1>Featured Heroes</h1>
      <div className='featured__list'>
        {!isLoading ? featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
          <HeroSimplified key={powerstats.id} name={name} imgUrl={imgUrl} powerstats={powerstats} />
        )) : (
          <div className='loader-container'>
            <Loader />
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedHeroes;
