import React from 'react'
import useProyectos from '../hooks/useProyectos'
import GeneratePDF from '../components/GeneratePDF'
import GeneratePDF2 from '../components/GeneratePDF2'
import { formatearFecha } from '../helpers/formatearFecha'
import {convertTime} from '../helpers/convertTime'
import {convertTimeDay} from '../helpers/convertTimeDay'

const Resumen = () => {

    const { proyecto } = useProyectos()
    const { orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente, hora_sr, reporto_sr, reportopax_sr } = proyecto
    
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center h-3/4   items-center justify-center bg-gray-200">

  
  <div className="bg-white p-8 md:w-[55rem] xl:w-[80rem]"> 

    
 

    
    <div className=' flex justify-between'>
        <h2 className="font-bold text-3xl mt-2 text-gray-300">
        SOLICITUD DE SERVICIO <br></br>
         <span className='text-red-600'> {nombre}</span>
        </h2>
        
        <h2 className="font-bold text-3xl mt-2 text-right">
        No. <span className='text-red-600 '>{orden}</span><br />
        <p className='text-lg text-gray-400'><span className='mr-5'>Fecha Solicitud:</span> {convertTime(solicitud_fecha)}</p>
        <p className='text-lg text-gray-400'><span className='mr-28'>Hora:</span>{hora_sr} hrs.</p>
        
        </h2>
    </div>
    

    <div className="p-9">
     <div className="flex flex-col mx-0 mt-8 ">
      <table className="min-w-full divide-y divide-slate-500 ">
       <thead>
        <tr>
         
         <th scope="col" className="  py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          DIA
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          FECHA
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          HORA
         </th>
 
        </tr>
       </thead>
       <tbody>
        <tr className="border-b border-slate-200">
         
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
         {convertTimeDay(visita_fecha)}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
         {convertTime(visita_fecha)}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {hora}
         </td>
        

        </tr>
        

       
       </tbody>
      </table>
     </div>
     <div className="flex flex-col mx-0 mt-8 ">
      <table className="min-w-full divide-y divide-slate-500 ">
       <thead>
        <tr>
         
         <th scope="col" className="  py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         TEL
         </th>
         <th scope="col" className=" py-3.5 px-5 text-center text-sm font-normal text-slate-700 sm:table-cell">
         DIRECCION
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         REPORTE
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         REPORTO
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         REPORTO PAX
         </th>
         
 
        </tr>
       </thead>
       <tbody>
        <tr className="border-b border-slate-200">
         
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {tel}
         </td>
         <td className="  py-4 px-5 text-sm text-center text-slate-500 sm:table-cell">
         {direccion}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
         {reporte_cliente}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {reporto_sr}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
         {reportopax_sr}
         </td>
         

        </tr>
        

       
       </tbody>
      </table>
     </div>
    </div>
    

    








  

    
    <GeneratePDF2 proyecto={proyecto} />

  </div>

  <div className="bg-white p-8 md:w-[55rem] xl:w-[80rem]"> 

    
    <header className="flex font-light text-sm">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#b91c1c" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      <p>{nombre}</p>
    </header>

    
    <div className=' flex justify-between'>
        <h2 className="font-bold text-3xl mt-2">
        Cliente: <span className='text-red-600'>{nombre}</span>
        </h2>
        
        <h2 className="font-bold text-3xl mt-2">
        No. <span className='text-red-600'>{orden}</span>
        </h2>
    </div>
    

    
    {/* <div className='flex justify-between'>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Dirección</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{direccion}</p>
        </div>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Colonia</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{colonia}</p>
        </div>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Ciudad</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{ciudad}</p>
        </div>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Tel</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{tel}</p>
        </div>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Codigo Postal</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{cp}</p>
        </div>
        <div className='mt-5'>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>Estado</p>
            <p className='py-.9  text-sm font-normal text-slate-700 sm:pr-6 md:pr-0'>{estado}</p>
        </div>
    </div> */}

    <div className="p-9">
     <div className="flex flex-col mx-0 mt-8 ">
      <table className="min-w-full divide-y divide-slate-500 ">
       <thead>
        <tr>
         
         <th scope="col" className="  py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Dirección
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Colonia
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Ciudad
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Tel
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Codigo Postal
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
          Estado
         </th>
 
        </tr>
       </thead>
       <tbody>
        <tr className="border-b border-slate-200">
         
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {direccion}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {colonia}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {ciudad}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {tel}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {cp}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {estado}
         </td>

        </tr>
        

       
       </tbody>
      </table>
     </div>
     <div className="flex flex-col mx-0 mt-8 ">
      <table className="min-w-full divide-y divide-slate-500 ">
       <thead>
        <tr>
         
         <th scope="col" className="  py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         Solicitud Fecha
         </th>
         <th scope="col" className=" py-3.5 px-5 text-center text-sm font-normal text-slate-700 sm:table-cell">
         Hora
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         visita_fecha
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         hora_entrada
         </th>
         <th scope="col" className=" py-3.5  text-center text-sm font-normal text-slate-700 sm:table-cell">
         hora_salida
         </th>
         
 
        </tr>
       </thead>
       <tbody>
        <tr className="border-b border-slate-200">
         
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {/* {solicitud_fecha?.split('T')[0]} */}
          {convertTime(solicitud_fecha)}
         </td>
         <td className="  py-4 px-5 text-sm text-center text-slate-500 sm:table-cell">
          {hora}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
         {/* {visita_fecha?.split('T')[0]} */}
         {convertTime(visita_fecha)}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {hora_entrada}
         </td>
         <td className="  py-4 text-sm text-center text-slate-500 sm:table-cell">
          {hora_salida}
         </td>
         

        </tr>
        

       
       </tbody>
      </table>
     </div>
    </div>
    


    
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>

       <div>
             <h3 className="font-bold text-xl mt-8 text-gray-600"> reporte cliente </h3>
             <p className="font-light"> {reporte_cliente}</p>
       </div>

       <div>
             <h3 className="font-bold text-xl mt-8 text-gray-600"> acciones realizadas </h3>
             <p className="font-light"> {acciones_realizadas}</p>
       </div>

       <div>
             <h3 className="font-bold text-xl mt-8 text-gray-600"> acciones de seguimiento </h3>
             <p className="font-light"> {seguimiento}</p>
       </div>

       <div>
             <h3 className="font-bold text-xl mt-8 text-gray-600"> material utilizado </h3>
             <p className="font-light"> {material_utilizado}</p>
       </div>

       <div>
             <h3 className="font-bold text-xl mt-8 text-gray-600"> reporte cliente </h3>
             <p className="font-light"> {comentarios_cliente}</p>
       </div>

    </div>

    
    


    <div className="p-9">
     <div className="flex flex-col mx-0 mt-8 ">
      <table className="min-w-full divide-y divide-slate-500 ">
       <thead>
        <tr>
         
         <th scope="col" className=" text-sm font-normal text-slate-700 sm:table-cell text-center">
          {firma_pax}
         </th>
         <th scope="col" className=" inline  text-sm font-normal text-slate-700 sm:table-cell ">
         <img className="inline mb-2" src={firma_cliente} alt="" />
        
         </th>

 
        </tr>
       </thead>
       <tbody>
        <tr className="border-b border-slate-200 ">
         
         <td className="py-4 text-sm  text-slate-500 sm:table-cell text-center">
          FIRMA PAX
         </td>
         <td className="py-4 text-sm  text-slate-500 sm:table-cell text-center">
          FIRMA CLIENTE
         </td>


        </tr>
        

       
       </tbody>
      </table>
     </div>
     
    </div>









  

    <GeneratePDF proyecto={proyecto} />
    

  </div>

</div>
  )
}

export default Resumen