import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Standings from './pages/Standings'
import DriversDetail from './pages/DriversDetail'
import PageNotFound from './pages/PageNotFound'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element : <MainLayout />,
      errorElement : <PageNotFound />,
      children : [
        {path: '/', element: <Home /> },
        {path: '/standings', element: <Standings /> },
        {path: '/driver/:driverId', element: <DriversDetail /> },
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
