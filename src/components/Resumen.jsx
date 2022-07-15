import React from "react";
import useProyectos from "../hooks/useProyectos";
import GeneratePDF from "../components/GeneratePDF";
import GeneratePDF2 from "../components/GeneratePDF2";
import GeneratePDF3 from "../components/GeneratePDF3";
import { formatearFecha } from "../helpers/formatearFecha";
import { convertTime } from "../helpers/convertTime";
import { convertTimeDay } from "../helpers/convertTimeDay";
import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es'

const Resumen = () => {
  const { proyecto } = useProyectos();
  const {
    orden,
    nombre,
    direccion,
    colonia,
    ciudad,
    tel,
    cp,
    estado,
    solicitud_fecha,
    hora,
    visita_fecha,
    hora_entrada,
    hora_salida,
    reporte_cliente,
    acciones_realizadas,
    seguimiento,
    material_utilizado,
    comentarios_cliente,
    firma_pax,
    firma_cliente,
    hora_sr,
    reporto_sr,
    reportopax_sr,
  } = proyecto;

  return (
    <div className="grid grid-cols-1 gap-4 place-items-center   items-center justify-center bg-gray-200">
      <div className="bg-white p-8 w-[22rem] md:w-[50rem] mt-5">
        <h2 className="font-bold text-3xl  text-gray-300">
          SOLICITUD DE SERVICIO <br></br>
          <span className="text-red-600"> {nombre}</span>
        </h2>

        <p className="text-right text-3xl font-bold text-red-500 mt-5">
          {" "}
          <span className="text-black mr-2">No.</span>
          {orden}
        </p>

        <div className="text-right mt-5">
          <p className="text-gray-500">
            Fecha Solicitud:{" "}
            <span className="text-black">{dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}</span>
            
          </p>
          <p className="text-gray-500">
            Hora: <span className="text-black">{hora_sr}</span> hrs.
          </p>
        </div>

        <div className=" grid gap-2 grid-cols-2"></div>

        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 text-center mt-10">
          <div className="min-w-full divide-y divide-slate-300 text-gray-500 leading-loose">
            <p className="">DIA</p>
            <p>{dayjs(visita_fecha).locale("es").add(1, 'day').format("dddd")}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>VISITA FECHA</p>
            <p>{dayjs(visita_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>HORA</p>
            <p>{hora}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>TEL</p>
            <p>{tel}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>DIRECCION</p>
            <p>{direccion}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>COLONIA</p>
            <p>{colonia}</p>
          </div>
        </div>

        {/* separacion */}

        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 text-center mt-10">
          <div className="min-w-full divide-y divide-slate-300 text-gray-500 leading-loose">
            <p className="">ESTADO</p>
            <p>{estado}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>CIUDAD</p>
            <p>{ciudad}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>C.P.</p>
            <p> {cp}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>REP. CLIENTE</p>
            <p>{reporte_cliente}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>REPORTO</p>
            <p>{reporto_sr}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>REPORTO PAX</p>
            <p>{reportopax_sr}</p>
          </div>
        </div>

        <GeneratePDF2 proyecto={proyecto} />
      </div>

     
      <div className="bg-white p-8 w-[22rem] md:w-[50rem] mb-5">
        <h2 className="font-bold text-3xl  text-gray-300">
          COMPLEMENTO ORDEN DE SERVICIO <br></br>
          
        </h2>

        <div className=" grid gap-2 grid-cols-2"></div>

        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 text-center mt-10">
          <div className="min-w-full divide-y divide-slate-300 text-gray-500 leading-loose">
            <p className="">SOL. FECHA</p>
            <p>{dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}</p>
          </div>


          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>HORA</p>
            <p>{hora_sr}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>VISITA FECHA</p>
            <p>{dayjs(visita_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose">
            <p>HORA ENT.</p>
            <p>{hora_entrada}</p>
          </div>

          <div className="min-w-full divide-y divide-slate-300 text-gray-500 ml-[-15px] leading-loose mb-10">
            <p>HORA SALIDA</p>
            <p>{hora_salida}</p>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <div>
            <h3 className="font-bold text-xl mt-8 text-gray-600">
              {" "}
              reporte cliente{" "}
            </h3>
            <p className="font-light"> {reporte_cliente}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mt-8 text-gray-600">
              {" "}
              acciones realizadas{" "}
            </h3>
            <p className="font-light"> {acciones_realizadas}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mt-8 text-gray-600">
              {" "}
              acciones de seguimiento{" "}
            </h3>
            <p className="font-light"> {seguimiento}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mt-8 text-gray-600">
              {" "}
              material utilizado{" "}
            </h3>
            <p className="font-light"> {material_utilizado}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mt-8 text-gray-600">
              {" "}
              comentario del cliente{" "}
            </h3>
            <p className="font-light"> {comentarios_cliente}</p>
          </div>
        </div>

        <div className="p-9">
          <div className="flex flex-col mx-0 mt-8 ">
            <table className="min-w-full divide-y divide-slate-500 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className=" text-sm font-normal text-slate-700 sm:table-cell text-center"
                  >
                    {firma_pax}
                  </th>
                  <th
                    scope="col"
                    className=" inline  text-sm font-normal text-slate-700 sm:table-cell "
                  >
                    <img className="inline mb-2 h-32" src={firma_cliente} alt="" />
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
  );
};

export default Resumen;
