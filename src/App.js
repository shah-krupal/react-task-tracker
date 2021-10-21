import logo from './logo.svg';
import react from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Button from './components/Button';
import TeachState from './components/TeachState';
import {useState} from 'react'


function App() 
{
  const [data,setData] = useState({})
  const updateData = (searchParameters) => {
    setData(searchParameters) ;
  }
  return (
    <div className="Head">
      
      <Header/>
      <Button/>
      <SearchBar callback = {updateData}/>
      <p>"name:" {"name" in data ? data["name"] : "No display" }</p>
      <TeachState/>
    </div>
  );
}


export default App;
