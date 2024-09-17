import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter, Router } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements([
    <Route path='/' element={} />,
    <Route path='/about' element={} />,
    <Route path='*' element={} />,
  ]))
  return (
    <RouterProvider router={router} />
  )
}

export default App
