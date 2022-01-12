/* import { BrowserRouter , Routes, Route } from 'react-router-dom' */
import React from 'react'
import Item from './Item'

import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'


import SaludoMenu from './ItemListContainer'
import ItemsCount from './itemsCount'
import NavBar from './NavBar'




function Menu() {
    return (
            <center>
            <NavBar/>
           <SaludoMenu saludo='hola mundo'/>
            <ItemsCount/>
           
            <ItemDetailContainer/>
            </center>
    )
}

export default Menu