import Home from './pages/Home'
import Analyze from './pages/Analyze'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'/analyze',
    element: <Analyze/>
  },
]);


function App() {

  return (
    <>
      <RouterProvider router = {router} /> 
    </>
  )
}

export default App
