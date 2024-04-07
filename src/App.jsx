import React from 'react'
import { Product } from './Components/product'
import { Navbar } from './Components/navbar'
import { Routes, Route } from 'react-router-dom'
import { AddProduct } from './Components/addproduct'
import { EditProduct } from './Components/editproduct'
import { ProductProvider } from './context'
import { Error } from './Components/error'

function App() {

  return (
    <ProductProvider>
      <div className="container">
        <Navbar />
        <div className="products">
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/edit/:dataid' element={<EditProduct />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </ProductProvider>
  )
}

export default App
