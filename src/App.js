import './App.css';

// Plugins
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './AppRoutes';

function App() {
  return (
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    );
}

export default App;
