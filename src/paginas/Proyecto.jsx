import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from '../hooks/useProyectos'
import ModalFormularioTareas from '../components/ModalFormularioTareas'
import ModalEliminarTarea from "../components/ModalEliminarTarea"
import Tarea from "../components/Tarea"
import Alerta from "../components/Alerta"
import Resumen from "../components/Resumen"



import io from 'socket.io-client'

let socket;

const Proyecto = () => {
  const params = useParams()
  const { obtenerProyecto, proyecto, cargando, handleModalTarea, alerta, submitTareasProyecto, eliminarTareaProyecto, actualizarTareaProyecto, cambiarEstadoTarea, elimarProyecto } = useProyectos()

  const [modal, setModal] = useState(false)

  

  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  const handleClick = () => {
    if (confirm('¿Deseas Eliminar este proyecto?')) {
      elimarProyecto(params.id)
    } 

  }

  //useEffect de socketio
  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL)
    socket.emit('abrir proyecto', params.id)
  }, [])



  useEffect(() => {

    socket.on('tarea agregada', tareaNueva => {
      if (tareaNueva.proyecto === proyecto._id) {
        submitTareasProyecto(tareaNueva)
      }
    })


    socket.on('tarea eliminada', tareaEliminada => {
      if (tareaEliminada.proyecto === proyecto._id) {
        eliminarTareaProyecto(tareaEliminada)
      }
    })

    socket.on('tarea actualizada', tareaActualizada => {
      if (tareaActualizada.proyecto._id === proyecto._id) {
        actualizarTareaProyecto(tareaActualizada)
      }
    })

    socket.on('nuevo estado', nuevoEstadoTarea => {
      if (nuevoEstadoTarea.proyecto._id === proyecto._id) {
        cambiarEstadoTarea(nuevoEstadoTarea)
      }
    })

  })
  
  
  
  const { nombre } = proyecto
  /* console.log(proyecto); */

  if(cargando) return 'Cargando...'

  const { msg } = alerta

  return (
    
      <>

<div className="flex justify-between ">
<div className="flex  items-center gap-2 text-black hover:text-red-600 mb-5">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
             </svg>

             <Link
             to={`/proyectos/editar/${params.id}`}
             >
             EDITAR ORDEN DE SERVICIO
             </Link>
      </div>
      <button  className='bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group' type="primary" onClick={handleClick}>Eliminar</button>
</div>



      

      <Resumen></Resumen>

      

   

     

      <ModalFormularioTareas 
      /* modal={modal}
      setModal={setModal} */
      /> 
      <ModalEliminarTarea />
    
    <p className="font-bold text-xl mt-10">Comentarios</p>



      <div className="bg-white shadow mt-10 rounded-lg ">
          {proyecto.tareas?.length ? proyecto.tareas?.map( tarea => (
            <Tarea 
            key={tarea._id}
            tarea={tarea}
            />
          )) : <p className="text-center my-5 p-10">No hay comentarios en este proyecto</p>}
      </div>

      <div className="flex items-center justify-between mt-10">
            <p className="font-bold text-xl text-gray-500">Final de comentarios</p>
            <Link
            to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
            className='text-gray-400 font-bold hover:text-black'
            >
            {/* Añadir */}
            </Link>
      </div>

      </>
    
  )
}

export default Proyecto