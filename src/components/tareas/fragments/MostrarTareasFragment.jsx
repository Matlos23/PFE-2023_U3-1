import React, {useState} from 'react'

const MostrarTareasFragment=({tareas,handleEliminarTarea})=>{
    return(
        <>
            <div className='col-12 mt-4'>
                <h3>Lista de tareas</h3>
            </div>
            <div className='col-12'>
                <ul className="list-group">
                    {
                        tareas.map(function (tarea) {
                            return (
                                <li className='list-group-item' key={tarea.id}>
                                    {tarea.nombre}
                                    <button type="button" class="btn btn-outline-danger btn-sm ms-3" onClick={()=>handleEliminarTarea(tarea.id)}>Eliminar</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default MostrarTareasFragment