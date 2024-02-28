import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { observer } from 'mobx-react-lite';
import {check} from './http/userAPI.js'
import { Spinner } from 'react-bootstrap';
import { Context } from './main.jsx';


const App = observer(()=> {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      check().then(data =>{
          user.setIsAuth(true)
          user.setUser(true)
        }).finally(()=>setLoading(false))
    }, 500);
  },[])

  if(loading){
    return <Spinner animation='grow'/>
  }

  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
})

export default App
