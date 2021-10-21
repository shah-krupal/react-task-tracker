import logo from './logo.svg';
import react from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Button from './components/Button';
import TeachState from './components/TeachState';


function App() 
{
  return (
    <div className="Head">
      
      <Header/>
      <Button/>
      <SearchBar/>
      <TeachState/>
    </div>
  );
}


export default App;
