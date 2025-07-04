import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const PreviewProyecto = ({proyecto}) => {

    const {auth} = useAuth()
    const {nombre, _id, cliente, creador } = proyecto

  return (
    <div className="border-b p-5 flex  md:flex-row justify-between">


      <div className="flex items-center gap-2">
      <p className="flex-1">{nombre}
      <span className="text-sm text-gray-500 ">{''}   {cliente}</span>
      </p>
      {auth._id !== creador && (
        <p className="p-1 text-xs rounded-lg text-white bg-green-500 font-bold">Colaborador</p>
      )}
      </div>
      
        <button className="bg-red-500">asdasdasdasdasdasd</button>
      <Link to={`${_id}`}
      className='text-gray-600 hover:text-gray-800 text-sm font-bold'
      >Ver Proyecto</Link>
    </div>
  )
}

export default PreviewProyecto