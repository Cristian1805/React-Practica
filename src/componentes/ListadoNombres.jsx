/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import uniqid from 'uniqid'

const ListadoNombres = () => {

    const [nombre, setnombre] = useState('')
    const [ListaNombres, setListaNombres] = useState([])

    const Addnombre = (e)=>{
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...ListaNombres, nuevoNombre])
    }


  return (
    <div>
        <h2>Aplicacion CRUD</h2>
        <div className="row">
            <div className='col'>
                <h2>Listado de Nombres</h2>
            </div>
            <div className='col'>
                <h2>Formulario para añadir nombres</h2>
                <form onSubmit={(e)=>Addnombre(e)} className='form-group'>
                    <input onChange={(e)=>{setnombre(e.target.value)}} className='form-control mb-3' type="text" placeholder="Introduce el nombre" />
                    <input className='btn btn-info btn-block' type="submit" value="Registrar nombre " />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ListadoNombres