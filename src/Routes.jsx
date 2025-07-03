import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Teacherpage from './Pages/Teacher/Teacher';

import Cources from './CommonComponents/Cources/Cources';
import Blogs from './CommonComponents/Cources/Blogs';



import Contactus from './CommonComponents/Contact/Contactus';
import Courcespage from './Pages/Cources/Cources';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'teacher',
        element: <Teacherpage />,
      },
      {
        path: 'course',

        element: <Cources />,
      },
  
      {
        path: 'contact',
        element: <Contactus />,
      },
      {
        path: 'blog',
        element: <Blogs/>,
      },
    ],
  },
]);

export default router;
