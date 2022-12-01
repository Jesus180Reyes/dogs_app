import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from './App'
import './index.css'
import { DogPage } from './DogPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DogPage />
  </React.StrictMode>
)
