import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/css/style.css'
import { NavBar } from './components/features/navbar/navbar'
import { Teste } from './components/features/teste/Teste'

function App() {
  return (
    <>
      <div className="cahier-container">
        <NavBar></NavBar>

        <main className="contenu-principal">
                <div className="lignes-papier"></div>
                <div className="contenu-note">
                    <Teste></Teste>
                </div>
                <div className="coins-papier"></div>
        </main>
    </div>
    </>
  )
}

export default App
