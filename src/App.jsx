import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./routes";
import { CartProvider } from "./context";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <CartProvider> {/*Para el use context*/} 
        <MainRouter />
      </CartProvider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
