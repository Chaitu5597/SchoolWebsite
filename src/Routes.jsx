// router.js
import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import Teacherpage from './Pages/Teacher/Teacher';
import About from './Pages/About/About'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutpage />,
    children: [
      { 
        index: true,
         element: <Home />
         },
      {
         path: 'about',
         element: <About/> 
         },
          {
         path: 'teacher',
         element: <Teacherpage /> 
         },
   
    ],
  },
  
 
]);

export default router;