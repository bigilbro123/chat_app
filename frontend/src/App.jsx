
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'

function App() {
  const Bgback = localStorage.getItem('bgpic')
  const [bg, setBg] = useState(Bgback || 'bg.png')

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
          setBg('bg.png')
          localStorage.setItem('bgpic', 'bg.png')
        }
      }} style={{ position: 'absolute', top: '10px', left: '10px' }} className="btn btn-ghost">change </button>
      <Home />

    </div>

  )
}

export default App
