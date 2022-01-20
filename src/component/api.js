const productos = [
    { id: 1, cantidad: 0, categoria: 'hombre', nombre: 'gorra', descripcion: 'algo', stock: 25 , precio:1000},
    { id: 2, cantidad: 0, categoria: 'hombre', nombre: 'pantalon', descripcion: 'algo', stock: 20, precio:3500 },
    { id: 3, cantidad: 0, categoria: 'hombre', nombre: 'remera', descripcion: 'algo', stock: 22, precio:2200 },
    { id: 4, cantidad: 0, categoria: 'hombre', nombre: 'bermuda', descripcion: 'algo', stock: 29, precio:2500 },
    { id: 5, cantidad: 0, categoria: 'mujer', nombre: 'zapatilla', descripcion: 'algo', stock: 32, precio:8500 },
    { id: 6, cantidad: 0, categoria: 'mujer', nombre: 'calza', descripcion: 'algo', stock: 2, precio:3500 },
    { id: 7, cantidad: 0, categoria: 'mujer', nombre: 'remera', descripcion: 'algo', stock: 12, precio:4500 },
    { id: 8, cantidad: 0, categoria: 'mujer', nombre: 'short', descripcion: 'algo', stock: 15, precio:2500 },
  ]
  
  export const llamada = new Promise((resolve, reject) => {
      let condicion = true
      if (condicion) {
        setTimeout(() => {
        resolve(productos)
      },3000)
      } else {
        reject('error critico')
      }
    })