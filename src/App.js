import imagenRickMorty  from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters]= useState(null);

  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()

    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty </h1>
      {characters ?(
        <Characters characters={characters} setCharacters={setCharacters}/>
      ) : (
      <>
        <img src={imagenRickMorty} alt="Rick & Morty" className="img-home" />
        <button onClick={reqApi} className='btn-search'>
           buscar personajes
        </button>
        </>
      )}
      </header>
      <footer>
        <h7>&copy; 2024 by: Kevin Santiago Cuesta</h7>
      </footer>

    </div>
  );
}

export default App;
