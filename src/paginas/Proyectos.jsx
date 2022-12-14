import { useEffect, useState } from "react"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from '../components/PreviewProyecto'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'
/* import ExportarExcel from "../components/ExportarExcel" */
import {CSVLink} from 'react-csv'



const Proyectos = () => {

  const { proyectos, alerta} = useProyectos()
 /*  console.log(proyectos); */




 
  const {auth} = useAuth()
  const {msg} = alerta

  function searchingTerm(term) {
    return function(x){
    return  x.nombre.toLowerCase().includes(term) 
    /* ||      x.orden.toLowerCase().includes(term) */ 
    ||      x.solicitud_fecha.toString().toLowerCase().includes(term) 
    ||      !term;
    }
  }

  const [data, setData] = useState([])
  const [term, setTerm] = useState("")
  
  useEffect(() => {
    setData(proyectos)
  }, [proyectos])

  const headers = [
    {label: 'Orden', key: 'orden'},
    {label: 'Nombre', key: 'nombre'},
    {label: 'Direccion', key: 'direccion'},
    {label: 'Colonia', key: 'colonia'},
    {label: 'Ciudad', key: 'ciudad'},
    {label: 'Tel', key: 'tel'},
    {label: 'CP', key: 'cp'},
    {label: 'Estado', key: 'estado'},
    {label: 'Solicitud Fecha', key: 'solicitud_fecha'},
    {label: 'Hora', key: 'hora'},
    {label: 'Visita Fecha', key: 'visita_fecha'},
    {label: 'Hora Entrada', key: 'hora_entrada'},
    {label: 'Hora Salida', key: 'hora_salida'},
    {label: 'Reporte Cliente', key: 'reporte_cliente'},
    {label: 'Acciones Realizadas', key: 'acciones_realizadas'},
    {label: 'Acciones de Seguimiento', key: 'seguimiento'},
    {label: 'Material Utilizado', key: 'material_utilizado'},
    {label: 'Comentarios Cliente', key: 'comentarios_cliente'},
    {label: 'Firma Pax', key: 'firma_pax'},
];

const csvReport = {
    filename: 'reporte.csv',
    headers: headers,
    data: data.filter(searchingTerm(term))
}
/* console.log(csvReport); */
  

  return (
    <>
      

      {msg && <Alerta alerta={alerta} />}

      <div className="grid gap-4 grid-cols-1 ">
      {/* <ExportarExcel 
      key={proyectos._id}
      proyecto={proyectos}
      />  */}

            <div className="flex justify-center md:justify-between">
                  <button className='hidden md:block w-28 rounded-xl bg-green-600 text-white font-semibold py-2 px-5 text-sm  items-center '>
                  <CSVLink
                  {...csvReport}
                  >Exp. Excel</CSVLink>
                  </button>

                <div className="pt-2 relative  text-gray-600  ">
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

      </div>
      
      <div className="mt-10 ">{/* h-5/6 overflow-y-scroll */}
        {/* SE REMPLAZO EL proyecto POR DATA para QUE FUNCIONARA EL METODO DE FILTRAR */}
        {data.length ? 
        data.filter(searchingTerm(term)).sort((a,b) => a.orden < b.orden ? 1 : -1).map(proyecto => (
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