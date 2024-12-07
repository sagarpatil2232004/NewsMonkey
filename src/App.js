import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [cat, setCat] = useState('general');
  function takeCaogrieFromHeader(category){
    setCat(category);
  }

  return (
    <div className='d-flex flex-column min-vh-100 ' >
      <Header takecat={takeCaogrieFromHeader}/>
      <News cat={cat}/>
      <Footer/>
    </div>
  );
}

export default App;
