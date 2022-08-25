import React from 'react'
import Header from '../../layout/Header/Header'
import BreadCrumb from '../../components/common/BreadCrumb'
import PopularBlog from '../../components/blog/PopularBlog'

import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'

const Blog = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '200px' }}>
        <BreadCrumb />
        <PopularBlog />
      </main>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Blog
