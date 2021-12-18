import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [page, setPage] = useState('home');

  const switchPage = (page) => {
    console.log(page);
    switch (page) {
      case 'home':
        return <Home />;
      case 'characters':
        break;
      case 'comics':
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      {switchPage(page)}
    </div>
  );
}

export default App;
