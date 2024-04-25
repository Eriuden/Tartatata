import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import {Provider} from "react-redux"
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension.js'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit"
import { reducers } from './redux/reducers/indexReducer'

const composedEnchancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({reducer:reducers}, composedEnchancer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
