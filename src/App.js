import React from 'react';
import './App.css';
import FeaturedHeroes from './Components/FeaturedHeroes/FeaturedHeroes';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div className='container'>
          <FeaturedHeroes />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
