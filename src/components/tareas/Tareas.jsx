import React, { useState } from 'react';
import AgregarTareasFragment from './fragments/AgregarTareaFragment';
import MostrarTareasFragment from './fragments/MostrarTareasFragment';

const listaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las quimeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
];

const Tareas = () => {
    const [tareas, setTareas] = useState(listaEjemplo);
    const [nombreTarea, setNombreTareas] = useState('');

    const handleModificarTarea = (evento) => {
        setNombreTareas(evento.target.value);
    }

    const handleAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debe escribir una Tarea');
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea  // Aquí se realizó la corrección
            };
            setTareas([...tareas, tareaNueva]);
            setNombreTareas('');
        }
    }

    const handleEliminarTarea =(id)=>{
        let tareasFiltradas=tareas.filter(tarea=>{
            return tarea.id!== id
        })
        setTareas(tareasFiltradas)
    }
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1>Tareas</h1>
                </div>
                <AgregarTareasFragment
                    nombreTarea={nombreTarea}
                    handleModificarTarea={handleModificarTarea}
                    handleAgregarTarea={handleAgregarTarea}
                    />
                <MostrarTareasFragment
                    tareas={tareas}
                    handleEliminarTarea={handleEliminarTarea}
                    />
            </div>
        </>
    );
}

export default Tareas;
