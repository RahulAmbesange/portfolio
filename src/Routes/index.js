import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import  Home  from '../Pages/Home';
import About from '../Components/About';
import Service from '../Components/Service';
import Portfolio from '../Components/Portfolio';

import Contact from '../Components/Contact';
import Education from '../Components/Education';


const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "",
            element: <Home />
         },
         {
            path: "/about",
            element: <About />
         },
         {
            path: "/service",
            element: <Service />
         },
         {
            path: "/portfolio",
            element: <Portfolio />
         },
         {
            path: "/education",
            element:<Education/>
         },
         {
            path: "/contact",
            element:<Contact/>
         }
      ]
   }
]);

export default router


