import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import CategoryPage from '../pages/CategoryPage'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

function MyRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category/:name" element={<CategoryPage />} />
    </Routes>
  )
}

export default MyRouter