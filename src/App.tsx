import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
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

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

export default App
