import { doc, getDoc } from 'firebase/firestore';
import { db } from '../index';

export async function getItemById(id) {
  try {
    const itemRef = doc(db, "items", id);
    const itemSnapshot = await getDoc(itemRef);

    if (itemSnapshot.exists()) {
      const data = { ...itemSnapshot.data(), id: itemSnapshot.id };
      console.log("Datos del producto:", data); // Agrega este console.log
      return data;
    } else {
      console.log("El producto no existe.");
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    return null;
  }
}





