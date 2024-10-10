import React from "react";
import { collection, getDocs } from "firebase/firestore"; /* Los documentos son los productos.  Esto viene directo de Firebase/Firestore*/
import { db } from "../firebase"; /*Traemos la configuración de la base de datos*/

export const useItemsCollection = (categoryName) => { /*El categoryName es un parámetro que recibimos*/
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const itemsCollection = collection(db, categoryName);
    getDocs(itemsCollection)
      .then((snapshot) => { /*snapshot de la base de datos*/
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); /*Firebase manda la doc encriptada/hasheada y ordenada, entonces
        tenemos que hacer el .map. doc.data para sacar la info del doc y desestructurar la información de ese documento*/
      })
      .catch(() => setError(true))
      .finally(() => {
        setTimeout(() => { //El setTimeout no es necesario, sólo se introdujo para alargar artificialmente el tiempo y ver de manera detallada
          // el comportamiento de los SkeletonItems
          setLoading(false)
        }, 1); // Incrementar el tiempo para apreciar mejor los SkeletonItems
      });
  }, []);  // Arreglo vacío para que sólo se renderize la primera vez

  return { items, loading, error };
};
