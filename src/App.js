import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NavPhoto from './Components/NavPhoto';
import Products from './Components/Products';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
import AllProducts from './Components/SeeAllProducts/AllProducts';
import Cart from './Components/Shopping-Cart/Cart';
import Login from './Components/Login';
import { useDispatch } from 'react-redux';
import { checkLogin } from './Components/Redux/Slices/isLoginSlices';
import { auth } from './Components/Firebase/FireBase';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        dispatch(checkLogin(user));
      },
      (error) => {
        console.log(error);
       
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavPhoto />
                <Products />
              </>
            }
          />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/shoppingcart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
