const productos = [
  { id: 1, nombre: 'gorra', descripcion: 'algo', stock: 22 , precio:1000},
  { id: 2, nombre: 'pantalon', descripcion: 'algo', stock: 22, precio:3500 },
  { id: 3, nombre: 'remera', descripcion: 'algo', stock: 22, precio:2200 },
  { id: 4, nombre: 'bermuda', descripcion: 'algo', stock: 22, precio:2500 },
]

export const llamada = new Promise((resolve, reject) => {
  
    if (productos != []) {
      setTimeout(() => {
      resolve(productos)
    },3000)
    } else {
      reject('error critico')
    }
  })