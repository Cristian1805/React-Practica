import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setedad] = useState('')

    const Validar = (event) => {
        event.preventDefault()
        console.log('Pulsado el boton')
        if (!nombre.trim()){
            console.log('El nombre esta vacio')
            return
        }
        if (!edad.trim()){
            console.log('El campo edad esta  vacio') 
            return
        }

    }



  return (
    <div className="Container">
        <form onSubmit={Validar} className='form-group'>
            <input 
                placeholder="Introduce el nombre" 
                className="form-control mb-3" 
                type="text"
                onChange={(e) =>{setNombre(e.target.value)}}
            />
            <input 
                placeholder="Introduce la edad" 
                className="form-control mb-3" 
                type="text"
                onChange={(e) =>{setedad(e.target.value)}}
            />
            <input className="btn btn-info btn-block mb-3" type="submit"/>
        </form>
    </div>
  )
}

export default Formulario
