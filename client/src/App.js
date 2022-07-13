import React from 'react';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';
import Formulario from './Pages/Formulario/Formulario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/formulario' element={<Formulario/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
