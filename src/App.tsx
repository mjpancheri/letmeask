import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
