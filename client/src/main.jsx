import {createContext} from 'react'
import {createRoot} from 'react-dom/client'
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js';
import App from './App.jsx'

export const Context = createContext(null) 
const domNode = document.getElementById('root');
const root = createRoot(domNode)

root.render(
  <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore()
    }}>
  <App />
  </Context.Provider>
)


