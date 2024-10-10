import { createContext, useState } from "react";

// Se crea y se exporta un Contexto para compartir información sin necesidad de props
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  //Esta función agrega o aumenta la cantidad de un producto de uno en uno en el carrito (botón incrementar)

  const addItem = (product) => {
    // Revisamos si el producto ya está en el carrito a través de un find.
    // The find method returns the first element in the provided array that satisfies the provided testing function.  
    // If no value satisfy the testing function, undefined is returned
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, le sumamos uno a la cantidad
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 } // Aquí solo sumamos 1 a la cantidad existente. 
            // El spread operator... expande el arreglo o cualquier iterable en sus elementos
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos
      /*setCartState([...cartState, { ...product, qtyItem }]);*/
      setCartState([...cartState, { ...product, qtyItem: 1 }]);
    }
  };


  //Esta función disminuye la cantidad de un producto en el carrito de uno en uno (botón decrementar)
  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);
    if (existingProduct) {
      // Si la cantidad es 1, eliminamos el producto del carrito a trávés de un filtro
      // The filter method creates a shallow copy of a portion of a given array, filtered down to
      // just the elements from the given array that pass the test implemented by the provided function

      if (existingProduct.qtyItem === 1) {
        //el nuevo valor es el arreglo filtrado de todos los elementos cuyo item.id es diferente al del producto
        //que deseamos eliminar
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {
        // Si la cantidad es mayor a 1, restamos 1 a la cantidad existente
        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };


  //Elimina un producto del carrito, independientemente del número de unidades que tenía
  const deleteItem = (product) => {
    setCartState(cartState.filter((item) => item.id !== product.id));
  };

  return ( //CardProvider regresa el CartContext.Provider (nombre personalizado)
    <CartContext.Provider
      //Valores y funciones que estarán disponibles para todos los hijos
      value={{ cartState, setCartState, addItem, removeItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
