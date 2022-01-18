import { BrowserRouter , Routes, Route } from 'react-router-dom'
import React from 'react'


import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'



import ItemsCount from '../Contador/itemsCount'
import NavBar from './NavBar'
import ListProductos from '../itemContainer/ItemListContainer'
import Marvelapi from '../marvel/marvel-api'




function Menu() {
    return (
            <center>
            <BrowserRouter>
            <NavBar/>
            
            <Routes>
            <Route exact path='/categoria/:categoriaId' element={<ListProductos/>}/>
            <Route exact path='/categoria' element={<ListProductos/>}/>
            <Route exact path='/ItemCount' element={<ItemsCount/>}/>
            <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            
          {/*   <Route exact path='/Marvel' element={<Marvelapi/>}/> */}
            </Routes>
            </BrowserRouter>
            </center>
    )
}

export default Menu