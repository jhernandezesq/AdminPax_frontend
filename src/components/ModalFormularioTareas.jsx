import {useState, useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'
import { useParams } from 'react-router-dom'

const PRIORIDAD = ['Baja', 'Media', 'Alta']

const ModalFormularioTareas = () => {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [prioridad, setPrioridad] = useState('')

    const params = useParams()
    /* console.log(params); */

    const { mostrarAlerta, alerta, submitTarea, tarea} = useProyectos()

    useEffect(() => {
      if (tarea?._id) {
          setId(tarea._id),
          setNombre(tarea.nombre),
          setDescripcion(tarea.descripcion),
          setFechaEntrega(tarea.fechaEntrega?.split('T')[0]),
          setPrioridad(tarea.prioridad)
          return
      }
      setId(''),
      setNombre(''),
      setDescripcion(''),
      setFechaEntrega(''),
      setPrioridad('')
    }, [tarea])
    

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, descripcion, fechaEntrega ,prioridad].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        await submitTarea({ id, nombre, descripcion, fechaEntrega ,prioridad, proyecto: params.id})

        //resetear el form de tareas
        setId(''),
        setNombre(''),
        setDescripcion(''),
        setFechaEntrega(''),
        setPrioridad('')

    }

    const {msg} = alerta

  return (
    <>
    <p className='text-gray-500 text-2xl mt-5'>{id ? 'Editar' : 'Crear'}</p>

    {msg && <Alerta alerta={alerta} /> }

    <div>
        <form 
    onSubmit={handleSubmit}
    className='my-10 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2  '>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='nombre'
            >
                Comentario
            </label>
            <input 
            id='nombre'
            type='text'
            placeholder='nombre de tarea'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='descripcion'
            >
                Descripcion 
            </label>
            <textarea 
            id='descripcion'
            placeholder='descripcion de tarea'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='fecha_entrega'
            >
                Fecha
            </label>
            <input 
            id='fecha_entrega'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='prioridad'
            >
                Prioridad
            </label>
            
            <select 
            id='prioridad'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={prioridad}
            onChange={e => setPrioridad(e.target.value)}
            >
                <option value="">-- Seleccionar -- </option>

                {PRIORIDAD.map( opcion => (
                    <option key={opcion}>{opcion}</option>
                ))}

            </select>
        </div>

        <input 
        type='submit'
        className='bg-sky-600 hover:bg-sky-700 w-full p-3 text-white font-bold cursor-pointer transition-colors rounded'
        value={id ? 'Guardar Cambios' : 'Crear Comentario'}
        />
    </form>
    </div>
    </>
  )
}

export default ModalFormularioTareas