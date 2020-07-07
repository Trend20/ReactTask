import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Cards from './components/cards/Cards';
import Motive from './components/motive/Motive';
import Help from './components/help/Help';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Cards />
      <Motive />
      <Help />
    </div>
  );
}

export default App;
