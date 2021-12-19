import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Buy from './pages/Buy';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Home from './pages/Home';

function App() {
  // Está começando em quadrinhos, para mostrar inicialmente o requisito.
  const [page, setPage] = useState('home');
  const [buyContent, setBuyContent] = useState('');

  //mudança de pagina quando há mudança no estado "page"
  const switchPage = (page) => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'characters':
        return <Characters />;
      case 'comics':
        return <Comics setBuyContent={setBuyContent} setPage={setPage} />;
      case 'buy':
        return <Buy content={buyContent} />;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {switchPage(page)}
    </div>
  );
}

export default App;
