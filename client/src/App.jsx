import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js';
import NavBar from './components/NavBar/NavBar.jsx';

export const Context = createContext(null) 


function App() {

  return (
    <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore()
    }}>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App
