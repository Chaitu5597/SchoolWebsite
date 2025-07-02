import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Teacherpage from './Pages/Teacher/Teacher';
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
        element: <Courcespage />,
      },
      
      {
        path: 'contact',
        element: <Contactus />,
      },
    ],
  },
]);

export default router;
