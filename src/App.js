import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './CommonComponents/About/Aboutus';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<About/>}/> 
      
      

    </Routes>
   </Router>
  ); 
}
export default App;
