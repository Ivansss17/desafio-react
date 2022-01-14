import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React from 'react'


import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


import SaludoMenu from '../itemContainer/ItemListContainer'
import ItemsCount from '../Contador/itemsCount'
import NavBar from './NavBar'




function Menu() {
    return (
            <center>
            <BrowserRouter>
            <NavBar/>
            
            <Routes>
            <Route exact path='/saludo' element={<SaludoMenu saludo='hola mundo'/>}/>
            <Route exact path='/ItemCount' element={<ItemsCount/>}/>
            <Route exact path='/ItemDetail' element={<ItemDetailContainer/>}/>
            </Routes>
            </BrowserRouter>
            </center>
    )
}

export default Menu