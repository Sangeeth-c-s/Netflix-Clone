import React from 'react';
import {orginals,action,comedyMovies,RomanceMovies,HorrorMovies,Documentaries} from './url'
import Navbar from './components/navbar/navbar';
import './App.css'
import Banner from './components/banner/banner';
import Rowpost from './components/rowpost/rowpost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={orginals} title="Netflix Orginals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedyMovies} title="Comedy" isSmall />
      <Rowpost url={HorrorMovies} title="Horror" isSmall />
      <Rowpost url={RomanceMovies} title="Romance" isSmall />
      <Rowpost url={Documentaries} title="Documentries" isSmall />
    </div>
  );
}

export default App;
