// App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes'; 
import './App.css';
function App() {
  return <RouterProvider router={router} />;
}

export default App;