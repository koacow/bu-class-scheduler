import React, { createContext, useState } from 'react';
import { 
  RouterProvider, 
  Route, 
  createRoutesFromElements, 
  createBrowserRouter,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, responsiveFontSizes, LinkProps } from '@mui/material';
import MainTemplate from './pages/MainTemplate';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css'

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (value: boolean) => {},
});

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  const theme = responsiveFontSizes(createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#cc0000',
        
      },
      secondary: {
        main: '#2D2926',
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      }
    }
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
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <RouterProvider router={router} />
      </DarkModeContext.Provider>
    </ThemeProvider>
  )
}

export default App
