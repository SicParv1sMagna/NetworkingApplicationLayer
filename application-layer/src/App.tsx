import './App.css'
import Auth from './pages/auth'
import Chat from './pages/chat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
