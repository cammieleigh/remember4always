import './App.css'
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Footer from './Components/Footer'
import SingleProduct from './Components/singleProduct';



function App() {


  return (
       <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/singleProduct/:productid' element={<SingleProduct />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
