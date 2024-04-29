
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OutletOne from './Outlets/OutletOne';
import Home from './component/Home';
import About from './component/About';
import Details from './component/Details';
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<OutletOne></OutletOne>,
     
    },
    {
      path:'/home',
      element:<Home></Home>,
    },
    {
     path:'/about',
     element:<About></About>,
    },
    {
      path:'/details/:id',
      element:<Details></Details>,
      loader: async ({ params }) => {
        return fetch(`https://fakestoreapi.com/products/${params.id}`);
      },
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
