import  { useState } from 'react';
import { Form } from 'react-bootstrap';

function FormUser() {
const [values, setValues] = useState({
    nombre: '',
    correo: ''
})

const {nombre , correo} = values

const handleImputs = (e) =>{
    setValues({
        ...values,
        [e.target.name] : e.target.value
    }       
    )
}
const handleSubmit = () =>{
    alert( `Hola ${nombre}  ${correo}`)
}


  return <div>
            <h3>Formulario de ingreso</h3>
            <Form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="nombre" onChange={handleImputs}/>
                
                <label>Correo</label>
                <input type="text" name="correo" onChange={handleImputs}/>
                <button type='submit'>Ingresar</button>
            </Form>

  </div>;
}

export default FormUser;
