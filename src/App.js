// routes
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import routes from './routes';

// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      {routing}
      <ToastContainer position="bottom-center" hideProgressBar />
    </ThemeProvider>
  );
}
