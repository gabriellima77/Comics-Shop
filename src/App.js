import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Home from './pages/Home';

function App() {
  const [page, setPage] = useState('home');

  const switchPage = (page) => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'characters':
        return <Characters />;
      case 'comics':
        return <Comics />;
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
