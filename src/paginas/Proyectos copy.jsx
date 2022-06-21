import { useEffect, useState } from "react"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from '../components/PreviewProyecto'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'
import ExportarExcel from "../components/ExportarExcel"



const Proyectos = () => {

  const { proyectos, alerta} = useProyectos()
  console.log(proyectos);


 
  const {auth} = useAuth()
  const {msg} = alerta

  function searchingTerm(term) {
    return function(x){
    return  x.nombre.toLowerCase().includes(term) || !term;
    }
  }

  const [data, setData] = useState([])
  const [term, setTerm] = useState("")
  
  useEffect(() => {
    setData(proyectos)
  }, [proyectos])
  

  return (
    <>
      

      {msg && <Alerta alerta={alerta} />}

      <div className="grid gap-4 grid-cols-2">
      <ExportarExcel 
      key={proyectos._id}
      proyecto={proyectos}
      /> 

        <div className="pt-2 relative mx-auto text-gray-600 w-1/6">
            <input 
            onChange={e => setTerm(e.target.value)}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" 
            name="search" 
            placeholder="                  Search" />
            <button type="submit" className="absolute left-2 top-1 mt-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
          </div>

      </div>
      
      <div className="mt-10 ">
        {/* SE REMPLAZO EL proyecto POR DATA para QUE FUNCIONARA EL METODO DE FILTRAR */}
        {data.length ? 
        data.filter(searchingTerm(term)).map(proyecto => (
          <PreviewProyecto 
          key={proyecto._id}
          proyecto={proyecto}
          
          />
        ))
        
        : <p className=" text-center text-gray-600 p-5">no hay proyectos</p>}
      </div>
    </>
  )
}

export default Proyectos