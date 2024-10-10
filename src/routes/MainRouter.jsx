import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Checkout, Home, Item, Payment } from "../pages";
import { NavBar } from "../components";

//rafc iniciará un componente funcional con arrow function y export
// rafce iniciará un componente funcional con arrow function y export default
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar /> {/* El Navbar no se pone afuera (como el footer) ya que ocupa valores del CartContex que se entregan
      a través del CartProvider*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} /> {/*Los ":" indican dinamismo, vamos a leer el valor que le precede
        y se lo asignameros a la variable id a través de useParams*/}
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};
