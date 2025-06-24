import React from 'react'
import { Route,  } from 'react-router-dom'
import About from './CommonComponents/About/Aboutus'
import Layoutpage from './Pages/Layoutpage'

const Routes = () => {
  return (
    <div>
   
    <Routes>
      <Route path='/' element={<Layoutpage/>}/> 
    </Routes>
   
    </div>
  )
}

export default Routes