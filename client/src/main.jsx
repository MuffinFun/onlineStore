import React, {createContext} from 'react'
import {createRoot} from 'react-dom/client'
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js';
import App from './App.jsx'


export const Context = createContext('') 
let container = null;

document.addEventListener('DOMContentLoaded', ()=>{
  if (!container) {
    container = document.getElementById('root')
    const root = createRoot(container)
    root.render(
      <Context.Provider value={{
        user: new UserStore(),
        devices: new DeviceStore()
          }}>
          <App />
      </Context.Provider>
    )
  }
});



