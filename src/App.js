import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Cards />
    </div>
  );
}

export default App;
