import React from 'react'
import ReactDOM from 'react-dom/client'

import { RIGSearchApp } from './RIGSearchApp.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RIGSearchApp />
    </BrowserRouter>
  </React.StrictMode>,
)
