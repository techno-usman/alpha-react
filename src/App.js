import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/landing/Home'
import News from './pages/news/News'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/BlogDetails'
import NotFound from './pages/notFound/NotFound'
import UserAccountSettings from './pages/useraccountsettings/UserAccountSettings';
import Careers from './pages/careers/Careers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/account-settings' element={<UserAccountSettings />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/home/news' element={<News />} />
      <Route path='/home/blog' element={<Blog />} />
      <Route path='/home/blog/details' element={<BlogDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
