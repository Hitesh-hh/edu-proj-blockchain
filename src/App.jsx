import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Wallet from './pages/Wallet';
import Home from './pages/Hhome';
import Members from './pages/Members';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {path:'/',element:<Wallet></Wallet>},
    {path:'/home',element:<Home></Home>},
    {path:'/members',element:<Members></Members>}
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
