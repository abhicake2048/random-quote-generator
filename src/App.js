import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import { useState } from 'react';

const quotes=['Today is a grate day', 'tomorrow will be a great day' , 'yesterday was a great day'];


function App() {

  const [quote, setQuote] = useState(quotes[0]);

  function gen(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)] 
    setQuote(randomQuote);
  }

  return (
    <div className="App">
      <Header />
      <h1>Random Tought generator</h1>
      <div className='quote'>{quote}</div>
      <div className='button'>
      <button onClick={gen}>Click me</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
