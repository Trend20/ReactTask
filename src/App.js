import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Cards from './components/cards/Cards';
import Motive from './components/motive/Motive';
import Help from './components/help/Help';
import Grid from './components/grid/Grid';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Cards />
      <Motive />
      <Help />
      <Grid />
      <Team />
    </div>
  );
}

export default App;
