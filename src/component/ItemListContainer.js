

const SaludoMenu = ({saludo}) =>{
    const miArray = [
        { id: 1, nombre: 'ivan', descripcion: 'algo', stock: 22 },
        { id: 1, nombre: 'ivan', descripcion: 'algo', stock: 22 },
        { id: 1, nombre: 'ivan', descripcion: 'algo', stock: 22 },
        { id: 1, nombre: 'ivan', descripcion: 'algo', stock: 22 },
      ];
    
      const llamada = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (miArray != []) {
            resolve(miArray)
          } else {
            reject('error critico')
          }
        },3000)
      })
    
      llamada
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => console.log(err))

    return(
        <>
            <h3>{saludo}</h3>
        </>
    )
}
export default SaludoMenu