import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import { reducers } from './redux/reducers/indexReducer'

const store = configureStore({reducer:reducers})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
