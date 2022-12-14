import React from 'react'
/* import useProyectos from '../hooks/useProyectos' */
import ExportExcel from 'react-export-excel'

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const ExportarExcel = ({proyecto}) => {

    /* const { proyecto } = useProyectos() */
    /* const { orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente } = proyecto */
    const {orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, /* firma_cliente */ } = proyecto
    console.log(proyecto);
    

  return (
    <>

    <h1>ola mundillo</h1>
    
    <ExcelFile element={<button className='bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group'>ExportarExcel</button>}
    filename="Excel">
        <ExcelSheet data={proyecto} name="servicios">
            <ExcelColumn label="orden" value={orden} />
            <ExcelColumn label="nombre" value={nombre} />
            <ExcelColumn label="direccion" value={direccion} />
        </ExcelSheet>

    </ExcelFile>
    </>
  )
}

export default ExportarExcel