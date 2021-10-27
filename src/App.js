import logo from './logo.svg';
import react from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Button from './components/Button';
import TeachState from './components/TeachState';
import {useState} from 'react'
import AddItems from './components/AddItems';
import ItemsDisplay from './components/ItemsDisplay';


function App() 
{
  const [filters,setFilters] = useState({})
  const [data,setData] = useState({items:[]})

  const updateFilters = (searchParameters) => {
    setFilters(searchParameters) ;
  }

  const addItemtoData = (item) => {
    let items = data["items"] ;
    item.id = items.length + 1;
    items.push(item) ;
    setData({items: items}) ;
    console.log(data) ;
  }

  const filterData = (data) => {
    const filteredData = [] ;
    if(filters === {}){
      return data ;
    }

    for (const item of data){
        if (filters.name !== "" && item.name !== filters.name){
          continue ;
        }
        if (filters.price !== 0 && item.price > filters.price){
          continue ;
        }
        if (filters.type !== "" && item.type !== filters.type){
          continue ;
        }
        if (filters.brand !== "" && item.brand !== filters.brand){
          continue ;
        }
        filteredData.push(item) ;
    }

    return filteredData ;
  }
  return (
    <div className="Head">
      
      <Header/>
      <Button/>
      <SearchBar updateSearchParams = {updateFilters}/>
      <ItemsDisplay items = {filterData(data["items"])} />
      <AddItems addItem = {addItemtoData}/>

      <TeachState/>
    </div>
  );
}


export default App;
