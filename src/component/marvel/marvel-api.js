/* import React from 'react'
import { useEffect, useState } from 'react'

function Marvelapi() {
    const [Hero, setHeros] = useState([])
  

  
    useEffect(()=>{
      fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c74b5821ca23e56a946ac6a29017a63d&hash=99aaacdb93675d0e69c72834043ccd7c')
      .then (resp => resp.json())
      .then ((json) => {
      console.log(json.data.results)
      setHeros(json.data.results)
      })
      .catch((err) =>{
       console.log(err)})
       
      /* .finally(()=>setLoading(false)) */
    /* },2000) */
    /* console.log() */
    /* return (
        <div>
            {Hero.map(heroe => 
        </div>
    ) */
/* }

export default Marvelapi  */
