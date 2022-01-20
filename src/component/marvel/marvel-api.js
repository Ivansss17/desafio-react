 import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Card, CardGroup, CardImg, Spinner } from 'react-bootstrap'

function Marvelapi() {
    const [Hero, setHeros] = useState([])
    const [loading, setLoading] = useState(true)

  
    useEffect(()=>{
      fetch('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=c74b5821ca23e56a946ac6a29017a63d&hash=99aaacdb93675d0e69c72834043ccd7c')
      .then (resp => resp.json())
      .then ((json) => {
      console.log(json.data.results)
      setHeros(json.data.results)
      })
      .catch((err) =>{
       console.log(err)})
       .finally(()=>setLoading(false))
       
     
    },3000) 
     
     return (
        <div className='Columnas'>
            

            {
            loading? <div><Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /></div> :
            
            
            Hero.map(heroe => 
                                 <div key={heroe.id}>                    
                                <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}  alt={heroe.name} />
                                <Card>
                                  <Card>Serie: {heroe.title}</Card>
                                  <Card>
                                  Descripcion: {heroe.description}
                                  </Card>
                                  
                                </Card>
                              </Card>
                              </div>


                                )}
                                
                                
                                
                                
                               
        </div>
    ) 
 }

export default Marvelapi  
