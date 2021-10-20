import logo from './logo.svg';
import react from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Button from './components/Button';
import teachState from './components/teachState';


function App() 
{
  return (
    <div className="Head">
      
      <Header/>
      <Button/>
      <SearchBar/>
      <teachState/>
    </div>
  );
}


export default App;
