import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import BasicExample from './components/Navbar';
import Home from './components/Home/Home';
import Favourites from './components/Favourites';
import BookDetails from './components/BookDetails';
import Footer  from './components/footer/Footer';




function App() {
 
  return (
    <div>
        
        <BrowserRouter>
        <BasicExample/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='/book/:id' element={<BookDetails/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    </div>
  )
}

export default App