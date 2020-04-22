import React from 'react';
import logo from './assets/netflix-logo.png';
import Dennis from './assets/dennis-rodman.jpg';
import './App.css';

function App() {
  let joueurs = Math.floor(Math.random() * 2 + 1);;
  const listejoueurs = (
    <ul>
      {joueurs === 1 && <li>Micheal Jordan</li>}
      {joueurs === 2 && <li>Scottie Pippen</li>}
      {joueurs === 3 && <li>Dennis Rodman</li>}
    </ul>
  );
  const menu = ['Micheal Jordan', 'Scottie Pippen', 'Dennis Rodman'];
  const listItems = menu.map(element => <li>{element}</li>);

  return (
    <div className="App">
      <div className="App-header">
        <h1>The last Dance</h1>
        <p>Une production de</p>
        <img src={logo} className="header-logo" alt="logo" />
        <h3>
          Mettant en vedette
        </h3>
        <img src={Dennis} className="img-fluid mb-5" alt='player1' />
      </div>
      <ul>{listItems}</ul>
      <div>
        <h3>
          Liste aléatoire
        </h3>
        <h3>
          {listejoueurs}
        </h3>
      </div>

    </div>
  );
}

export default App;
