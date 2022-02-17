import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemsCount from '../Contador/itemsCount';

function Resumen({idOrden}) {
   
  const [orden, setOrden] = useState([]);
  useEffect(() => {
    const db = getFirestore ()
    const queryOrden = doc(db, 'ordenes', idOrden,)
    getDoc (queryOrden)
        //.then ((resp) => console.log(resp))
       .then ((resp) => setOrden({id: resp.id, ...resp.data()}))
  
      
  }, [idOrden]);
  
    
  

  return <>
    <br></br>  
    <br></br>  
    
     <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Su Compra fue un exito</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">El numero de seguimiento de su pedido es: {orden.id}</Card.Subtitle>
    <Card.Text>
      El total de su compra fue: {orden.total}
    </Card.Text>
    
  </Card.Body>
</Card>

                  

  </>
}

export default Resumen;
