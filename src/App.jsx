import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

const productFetch = async () => {
  const res = await fetch("/carddata.json")
  return res.json()
}
function App() {
const fetchPromise = productFetch()
const [carts, setCarts] = useState()
  return (
    <>
      <Navbar carts={carts}></Navbar>
      {/* <Banner></Banner> */}
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products fetchPromise={fetchPromise}
        carts={carts} setCarts={setCarts}
        ></Products>
      </Suspense>
      
    </>
  )
}

export default App
