import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Carimobil from './pages/Carimobil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './app/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cari-mobil' element={<Carimobil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
