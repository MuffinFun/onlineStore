import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import UserStore from './store/UserStore.js'

export const Context = createContext(null) 


function App() {

  return (
    <Context.Provider value={{
      user: new UserStore()
    }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App
