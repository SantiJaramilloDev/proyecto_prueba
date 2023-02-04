import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GifExpertApp } from './screens/GifExpert/GifExpertApp';
import { Home } from './screens/Home/Home';
import { InfoGames } from './screens/InfoGames/InfoGames';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/app-gif' element={<GifExpertApp/>}/>
        <Route path='/info-games' element={<InfoGames/>}/>
        <Route path='*' element={<h1>LA RUTA INGRESADA NO ES CORRECTA, VERIFIQUE LA INFORMACION</h1>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
