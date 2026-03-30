import { Suspense } from 'react'
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

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products fetchPromise={fetchPromise}></Products>
      </Suspense>
      
    </>
  )
}

export default App
