import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Components/Navbar';
import NavPhoto from './Components/NavPhoto';
import FeatureCard from './Components/FeatureCard';
import Products from './Components/Products';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import AllProducts from './Components/SeeAllProducts/AllProducts';
import Cart from './Components/Shopping-Cart/Cart';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
        
          <Route path="/" element={
            <>  
            <NavPhoto />
              <Products />
            </>

          } />
            <Route path='/allProducts' element={<AllProducts/>}/>
            <Route path='/shoppingcart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>


  );
}

export default App;
