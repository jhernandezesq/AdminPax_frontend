import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'

const FormularioProyecto = () => {

    const [id, setId] = useState(null)
    const [orden, setOrden] = useState('')
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [colonia, setColonia] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [tel, setTel] = useState('')
    const [cp, setCp] = useState('')
    const [estado, setEstado] = useState('')
    const [solicitud_fecha, setSolicitud_fecha] = useState('')
    const [hora, setHora] = useState('')
    const [visita_fecha, setVisita_fecha] = useState('')
    const [hora_entrada, setHora_entrada] = useState('')
    const [hora_salida, setHora_salida] = useState('')
    const [reporte_cliente, setReporte_cliente] = useState('')
    const [acciones_realizadas, setAcciones_realizadas] = useState('')
    const [acciones_seguimiento, setAcciones_seguimiento] = useState('')
    const [material_utilizado, setMaterial_utilizado] = useState('')
    const [comentarios_cliente, setComentarios_cliente] = useState('')
    const [firma_pax, setFirma_pax] = useState('')
    const [firma_cliente, setFirma_cliente] = useState('')
    

    const params = useParams()
    const {mostrarAlerta, alerta, submitProyecto, proyecto} = useProyectos()

    useEffect(() => {
        if (params.id) {
            setId(proyecto._id)
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente)
        } 
    }, [params])
    

    const handleSubmit = async e => {
        e.preventDefault()
        if ([nombre, descripcion, fechaEntrega, cliente].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        //pasar los datos a provider
        await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente})

        setId(null)
        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')

        
    }

    const {msg} = alerta

  return (
    <form className='bg-white py-10 px-5 md:w-full rounded-lg shadow' onSubmit={handleSubmit}>

        {msg && <Alerta alerta={alerta} />}

        <div className='mb-5'>
            <label className='text-gray-700 font-bold text-sm'
            htmlFor='nombre'>
                Nombre Proyecto
            </label>
            <input 
            id='nombre'
            type="text" 
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='nombre de proyecto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label className='text-gray-700 font-bold text-sm'
            htmlFor='descripcion'>
                Descripcion
            </label>
            <textarea 
            id='descripcion'
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='descripcion del proyecto'
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label className='text-gray-700 font-bold text-sm'
            htmlFor='fecha-entrega'>
                Fecha de entrega
            </label>
            <input 
            id='fecha-entrega'
            type="date" 
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label className='text-gray-700 font-bold text-sm'
            htmlFor='cliente'>
                Cliente
            </label>
            <input 
            id='cliente'
            type="text" 
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
            placeholder='cliente'
            value={cliente}
            onChange={e => setCliente(e.target.value)}
            />
        </div>



        <input 
        type="submit"
        value={id ? 'Actualizar Servicio' : 'Crear Servicio'}
        className='text-center bg-sky-600 w-full p-3 font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors'></input>

    </form>
  )
}

export default FormularioProyecto