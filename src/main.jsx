import React from 'react'
import ReactDOM from 'react-dom/client'


import './styles.css'
import { HashRouter } from 'react-router-dom'
import { HeroApp } from '../HeroApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename='/'>
    <HeroApp/>
  </HashRouter>,
)
