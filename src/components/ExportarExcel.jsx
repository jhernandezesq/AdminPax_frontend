import {CSVLink} from 'react-csv'



const ExportarExcel = ({proyecto}) => {

    const {orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente } = proyecto
    /* console.log(proyecto); */

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
        data: proyecto
    }

  return (
    <>
    {/* <button className='bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group'>ExportarExcel</button> */}

    <button className='w-28 rounded-xl bg-green-600 text-white font-semibold py-2 px-5 text-sm  items-center '>
    <CSVLink
    {...csvReport}
    >Exp. Excel</CSVLink>
    </button>


    
    </>
  )
}

export default ExportarExcel