import { Routes, Route } from 'react-router-dom'
import Home from './pages/landing/Home'
import News from './pages/news/News'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home/news' element={<News />} />
    </Routes>
  )
}

export default App
