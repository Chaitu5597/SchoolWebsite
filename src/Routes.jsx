import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Teacherpage from './Pages/Teacher/Teacher';
import Cources from './CommonComponents/Cources/Cources';
import Courcesblog from './Pages/Cources/Courcesblog';
import Contactus from './CommonComponents/Contact/Contactus';

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
        path: 'courcesblog',
        element: <Courcesblog />,
      },
      {
        path: 'contact',
        element: <Contactus />,
      },
    ],
  },
]);

export default router;
