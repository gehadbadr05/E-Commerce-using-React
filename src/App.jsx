import React, { useEffect } from "react";
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router'
import LoginPage from './Pages/LoginPage'
import Error from './Pages/Error'
import AddStudent from './Pages/AddStudent'
import Store from './Pages/Store'
import ProductsDetails from './Pages/ProductDetails'
import Cart from "./Pages/Cart";
import { useDispatch } from "react-redux";
import { getProducts } from "./API/Products";
import { setProducts } from "./Redux/Slices/productsSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
    const data = await getProducts();
      dispatch(setProducts(data));
    })();
  }, [dispatch]);
  return (
    <>
      <MyNav />
      {<Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addstudent' element={< AddStudent />} />
        <Route path='/store' element={< Store />} />
        <Route path='/store/:id' element={<ProductsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={< Error />} />
      </Routes>}
      <MyFooter></MyFooter>
    </>

  )
}






