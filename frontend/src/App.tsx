import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Layout/Main/Main';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';

function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <main><Main/></main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
