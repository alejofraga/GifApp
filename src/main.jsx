import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/searchBar.css'
import './css/estilo.css'
import { GifApp } from './gif-app'
import { Menu } from './menu'
import { Footer } from './footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <GifApp />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.querySelector('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
