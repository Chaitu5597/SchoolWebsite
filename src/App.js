import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './CommonComponents/About/Aboutus';
import Layoutpage from './Pages/Layoutpage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Layoutpage/>}/> 
    </Routes>
   </Router>
  ); 
}
export default App;
