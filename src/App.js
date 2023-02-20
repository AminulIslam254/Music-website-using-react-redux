import React, { Component } from 'react'
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Favorites from './components/Favorites';


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/favourites' element={<Favorites/>} />
      </Routes>
      
      </BrowserRouter>
      </>
      
    )
  }
}
