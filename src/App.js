import { Routes, Route } from 'react-router-dom'
import Home from './pages/landing/Home'
import News from './pages/news/News'
import Blog from './pages/blog/Blog'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home/news' element={<News />} />
      <Route path='/home/blog' element={<Blog />} />
    </Routes>
  )
}

export default App
