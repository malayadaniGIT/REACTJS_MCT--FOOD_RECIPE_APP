import React from "react";
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import "./App.css"
import Nav from "./Components/NavBar/Nav";
import Recipes from "./Components/Nav Routes/Recipes";
import Home from "./Components/Nav Routes/Home";
import Recipedetails from "./Components/Nav Routes/Recipedetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Recipes" element={<Recipes/>}/>
          <Route path="/Recipedetails/:id" element={<Recipedetails/>} />
          </Routes>
        </div>
          <ToastContainer/>
    </BrowserRouter>

  );
}

export default App;
