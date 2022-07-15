import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";



import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es'







const PreviewProyecto = ({ proyecto }) => {

  

  const { auth } = useAuth();
  const {
    nombre,
    _id,
    orden,
    cliente,
    creador,
    direccion,
    reporte_cliente,
    solicitud_fecha,
    prioridad,
  } = proyecto;

  

  return (
    <>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 border-b p-5 bg-white rounded-lg mb-1">
        
          
          <div>
          <p className="text-red-500 text-xl uppercase">{orden}</p>
          <span className="text-sm text-gray-500 mr-10 ">{nombre}</span>
          </div>

          {/* <span className="  text-xs md:text-sm text-gray-500 	">Solicitud: {moment(solicitud_fecha).add(1, 'days').locale('mx').format('LL')}</span> */}
         
          
          {/* <span className="  text-xs md:text-sm text-gray-500 	">Solicitud: {format(parseISO(solicitud_fecha), 'dd-MM-yyyy')}</span> */}
          {/* <span className="  text-xs md:text-sm text-gray-500 	">Solicitud: {format(new Date(solicitud_fecha), 'M/d/yyyy')}</span>
          <span className="  text-xs md:text-sm text-gray-500 	">Solicitud: {format(new Date(solicitud_fecha), "yyyy-MM-dd HH:mm z")}</span> */}

          {/* <h1>{format(new Date(solicitud_fecha), 'dd/MM/yyy')}</h1> */}
          
          <h1></h1>
          <span className="text-xs md:text-sm text-gray-500">Fecha Solicitud: {dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}</span>
          

          
          

          
          
            
          

          {/* {auth._id !== creador && (
            <p className="p-1 text-xs rounded-lg text-white bg-green-500 font-bold">
              Colaborador
            </p>
          )} */}
        
        
       

        <div className="md:col-end-7 col-span-2">
          <p
            className={`${
              prioridad === "Completado"
                ? "bg-green-500"
                : prioridad === "Cancelado"
                ? "bg-red-500"
                : "bg-gray-500"
            } text-white px-3 py-1  font-bold text-sm rounded-lg mr-5`}
          >
            {prioridad}
          </p>

          <Link
            to={`${_id}`}
            className="text-gray-300 hover:text-gray-800 text-sm font-bold"
          >
            Ver Proyecto
          </Link>

        </div>
      </div>
    </>
  );
};

export default PreviewProyecto;
