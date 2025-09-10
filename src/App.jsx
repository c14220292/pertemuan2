import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProfileTheme from './components/ProfileTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header />
      <p>Ini adalah komponen utama</p> */}
      <ProfileTheme />
      {/* <Footer /> */}
    </>
  )
}

export default App
