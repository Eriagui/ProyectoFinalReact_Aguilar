import { Flex, Button, Formik } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { cartState } = useContext(CartContext);
  const { setCartState } = useContext(CartContext);
  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const navigate = useNavigate();

  const validateData = () => {
    let pass = true;
    if (!name) {
      alert("Please provide a name")
      pass = false;
    }
    if (!lastName) {
      alert("Please provide a last name")
      pass = false;
    }
    if (!email) {
      alert("Please provide an email")
      pass = false;
    }
    console.log(cartState);
    if (cartState.length == 0) {
      alert("Please add items to your cart")
      pass = false;
    }
    return pass;
  }

  const handleCreateOrder = () => {

    let pass = validateData();

    if (pass) {

      const orderObj = {
        buyer: {
          name: name,
          lastName: lastName,
          email: email,
        },
        items: cartState.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.qtyItem,
          };
        }),
        total: total,
      };

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, orderObj).then(({ id }) => {
        alert("Thanks for shopping with us. \n Your order with ID " + id + " has been created. \n The details were sent to your e-mail.");
        navigate("/")
        setCartState([]);
      });
    }
  };

  return (
    <FormControl isRequired>
      <FormLabel> First Name</FormLabel>
      <Input placeholder="First name"/>
    </FormControl>



    /*<Flex mt="20" ml="10">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        type="email"
        placeholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
        <Button colorScheme="blue" size="lg" onClick={handleCreateOrder}>
          Submitt Order
        </Button>
    </Flex>*/
  );
};
