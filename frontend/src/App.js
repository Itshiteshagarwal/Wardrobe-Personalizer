
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Shopcategory from './Pages/Shopcategory';
import Loginsignup from './Pages/Loginsignup';
import Product from './Pages/Product';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory category="men"/>}/>
        <Route path='/womens' element={<Shopcategory category="women"/>}/>
        <Route path='/kids' element={<Shopcategory category="kid"/>}/>
        <Route path ="product" element={<Product/>}>
          <Route path = ':productId'element={<product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
