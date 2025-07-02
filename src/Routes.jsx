import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import About from './CommonComponents/About/Aboutus';
import  Cources from './CommonComponents/Cources/Cources';
import Courcesblog from './Pages/Cources/Courcesblog';
import { ContactPage } from '@mui/icons-material';
import Contactus from './CommonComponents/Contact/Contactus';
=======
import About from './Pages/About/About';
import Cources from './CommonComponents/Cources/Cources';
import Contactus from './CommonComponents/Contact/Contactus';
import Teacherpage from './Pages/Teacher/Teacher';


>>>>>>> fd18e8a880e77ff00dd9f7fb1e69c7d6cb2020f9

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
<<<<<<< HEAD
         {
          path: 'courcesblog',
          element: <Courcesblog/>
         },
          {
          path: 'contact',
          element: <Contactus/>
         }
=======
>>>>>>> fd18e8a880e77ff00dd9f7fb1e69c7d6cb2020f9

          
           {
         path: 'Contactus',
         element: <Contactus/> 
         }            

    ],
  },
  
]);

export default router;