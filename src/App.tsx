import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import CardsList from './components/CardsList/CardsList';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <CardsList />
    </React.Fragment>
  );
}

export default App;
