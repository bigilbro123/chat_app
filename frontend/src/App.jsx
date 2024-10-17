
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Signup from './pages/signup/SignUp'
import { useAuthContext } from './context/AthuContext'


function App() {
  const Bgback = localStorage.getItem('bgpic')
  const [bg, setBg] = useState(Bgback || 'bg.png')
  const { AthuUser } = useAuthContext()

  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }} className='p-4 h-screen flex items-center justify-center'>
      <button onClick={() => {
        if (bg === 'bg.png') {
          setBg('bg1.jpg')
          localStorage.setItem('bgpic', 'bg1.jpg')
        } else if (bg === 'bg1.jpg') {
          setBg('bg2.jpg')
          localStorage.setItem('bgpic', 'bg2.jpg')
        } else if (bg === 'bg2.jpg') {
          setBg('bg3.jpg')
          localStorage.setItem('bgpic', 'bg3.jpg')
        } else {
          setBg('bg.png')
          localStorage.setItem('bgpic', 'bg.png')
        }
      }} style={{ position: 'absolute', top: '10px', left: '10px' }} className="btn btn-ghost">change </button>

      <Routes>
        <Route path='/' element={AthuUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={AthuUser ? <Navigate to={'/'} /> : <Login />} />

        <Route path='/signup' element={AthuUser ? <Navigate to={'/'} /> : <Signup />} />
      </Routes>

    </div>

  )
}

export default App
