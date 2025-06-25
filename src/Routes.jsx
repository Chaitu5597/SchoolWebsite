// router.js
import { createBrowserRouter } from 'react-router-dom';
import Layoutpage from '../src/Pages/Layoutpage';
import Home from './Pages/Home/Home';
import About from './CommonComponents/About/Aboutus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutpage />,
    children: [
      { index: true,
         element: <Home />
         },
      { path: 'about',
         element: <About />
         },
    ],
  },
]);

export default router;