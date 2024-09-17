import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, responsiveFontSizes } from '@mui/material';
import MainTemplate from './pages/MainTemplate';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  const theme = responsiveFontSizes(createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff5722',
      },
      secondary: {
        main: '#ff5722',
      },
    },
  }))

  const router = createBrowserRouter(createRoutesFromElements([
    <Route path='/' element={<MainTemplate />}>
      <Route index element={<Home />} />
    </Route>,
    <Route path='/about' element={<About />} />,
    <Route path='*' element={<NotFound />} />,
  ]))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
