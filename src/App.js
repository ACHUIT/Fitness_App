import React from 'react';
import {Routes ,Route} from "react-router-dom";
import {Box} from "@mui/material";
import "./App.css";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"},backgroundColor:"#AAAAAA"}} m="auto">
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element ={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;