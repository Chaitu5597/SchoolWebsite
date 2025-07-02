import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cources from './CommonComponents/Cources/Cources';
import Contactus from './CommonComponents/Contact/Contactus';
import Teacherpage from './Pages/Teacher/Teacher';



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
   

         {
         path: 'course',
         element: <Cources/> 
         },

          
           {
         path: 'Contactus',
         element: <Contactus/> 
         }            

    ],
  },
  
]);

export default router;