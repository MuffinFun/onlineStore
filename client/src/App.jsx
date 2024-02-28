import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js';
import NavBar from './components/NavBar/NavBar.jsx';
import { observer } from 'mobx-react-lite';
import {check} from './http/userAPI.js'
import { Spinner } from 'react-bootstrap';

export const Context = createContext(null) 


const App = observer(()=> {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    check().then(data =>{
        user.setIsAuth(true)
        user.setUser(true)
      }).finally(()=>setLoading(false))
  },[])

  if(loading){
    return <Spinner animation='grow'/>
  }

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
})

export default App
