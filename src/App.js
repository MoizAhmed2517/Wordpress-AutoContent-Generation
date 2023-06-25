import './App.css';
import { SnackbarProvider } from 'notistack';

// Plugins
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './AppRoutes';

function App() {
  return (
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter basename="/">
          <AppRoutes />
        </BrowserRouter>
      </SnackbarProvider>
    );
}

export default App;
