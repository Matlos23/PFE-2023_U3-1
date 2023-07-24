import React, {useState} from 'react'



const AgregarTareasFragment=({nombreTarea,handleAgregarTarea,handleModificarTarea})=>{
    return(
        <>
            <div className='col-12'>
                <label htmlFor="nombre-tarea">Tarea</label>
                <input type="text" className='form-control' id='nombre-tarea' value={nombreTarea} onChange={handleModificarTarea} />
                <button type='button' className='btn btn-primary mt-3' onClick={handleAgregarTarea}>Añadir</button>
            </div>
        </>
    )
}

export default AgregarTareasFragment