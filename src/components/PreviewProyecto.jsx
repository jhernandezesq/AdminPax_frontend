import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import { PaperClipIcon } from '@heroicons/react/solid'
import {formatearFecha} from '../helpers/formatearFecha'
import {convertTime} from '../helpers/convertTime'

const PreviewProyecto = ({proyecto}) => {

  

    const {auth} = useAuth()
    const {nombre, _id, orden, cliente, creador, direccion, reporte_cliente, solicitud_fecha, prioridad } = proyecto




  return (
    


   <>
   
    <div className="border-b p-5 flex  md:flex-row justify-between bg-white rounded-lg mb-1">


<div className="flex items-center gap-2">
    <p className="flex-1 text-red-500 text-xl uppercase"> {_id.slice(19)}
    <span className="text-sm text-gray-500 ml-5">{''}   {nombre}</span>
    
    <span className="text-sm text-gray-500 ml-20">{''}  Solicitud: {convertTime(solicitud_fecha)}</span>
    </p>
{auth._id !== creador && (
  <p className="p-1 text-xs rounded-lg text-white bg-green-500 font-bold">Colaborador</p>
)}
</div>

<div className="flex justify-between">  


{/* <p  className={`${prioridad === 'Completado' ? 'bg-green-600' : 'bg-red-600'} px-3 py-2 text-white font-bold text-sm rounded-lg mr-5`}>{prioridad}</p> */}
<p  className={`${(prioridad === 'Completado') ? 'bg-green-500' : (prioridad === 'Cancelado') ? 'bg-red-500' : 'bg-gray-500'  } text-white px-3 py-2  font-bold text-sm rounded-lg mr-5`}>{prioridad}</p>



<Link to={`${_id}`}
className='text-gray-300 hover:text-gray-800 text-sm font-bold'
>Ver Proyecto</Link>
</div>
</div>
   </>


  )
}

export default PreviewProyecto