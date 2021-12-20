import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { getBasicHeroInfoById } from './requests';

const featuredHeroesIds = [620, 502, 10];

function App() {
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
    <>
      <Nav />
      <main>
        <section className='featured__hero'>
          {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
            <div>
              <h2>{name}</h2>
              <img src={imgUrl} alt={name} />
              <div className='featured__hero__stats'>
                <div>
                  <p>{powerstats.combat}</p>
                </div>
                <div>
                  <p>{powerstats.durability}</p>
                </div>
                <div>
                  <p>{powerstats.intelligence}</p>
                </div>
                <div>
                  <p>{powerstats.speed}</p>
                </div>
                <div>
                  <p>{powerstats.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
