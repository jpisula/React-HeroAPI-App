import React from 'react';
import './App.css';
import FeaturedHeroes from './Components/FeaturedHeroes/FeaturedHeroes';
import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchView from './Components/SearchView/SearchView';
import HeroDetails from './Components/HeroDetails/HeroDetails';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<FeaturedHeroes />} />
            <Route path='/search/:name' element={<SearchView />} />
            <Route path='/hero/:id' element={<HeroDetails />} />
            <Route path="*" element={<FeaturedHeroes/>}/>
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
        </div>
      </footer>
    </Router>
      
    </>
  );
}

export default App;
