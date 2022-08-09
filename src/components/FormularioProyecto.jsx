import {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SignaturePad from 'react-signature-canvas'

const FormularioProyecto = ({tarea}) => {

    const PRIORIDAD = ['En Proceso', 'Completado', 'Cancelado']

    const [id, setId] = useState(null)
    const [orden, setOrden] = useState('')
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    
    const [numero, setNumero] = useState('')
    const [interior, setInterior] = useState('')

    const [colonia, setColonia] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [tel, setTel] = useState('')
    const [cp, setCp] = useState('')
    const [estado, setEstado] = useState('')
    const [solicitud_fecha, setSolicitud_fecha] = useState('')
    const [hora, setHora] = useState('')

    const [visita_fecha, setVisita_fecha] = useState('')
    const [visita_fecha_servicios, setVisita_fecha_servicios] = useState('')

    const [hora_entrada, setHora_entrada] = useState('')
    const [hora_salida, setHora_salida] = useState('')
    const [reporte_cliente, setReporte_cliente] = useState('')
    const [acciones_realizadas, setAcciones_realizadas] = useState('')
    const [seguimiento, setSeguimiento] = useState('')
    const [material_utilizado, setMaterial_utilizado] = useState('')
    const [comentarios_cliente, setComentarios_cliente] = useState('')
    const [firma_pax, setFirma_pax] = useState('')
    const [firma_cliente, setFirma_cliente] = useState('')
    const [hora_sr, setHora_sr] = useState('')
    const [reporto_sr, setReporto_sr] = useState('')
    const [reportopax_sr, setReportopax_sr] = useState('')
    const [fecha_sr, setFecha_sr] = useState('')
    const [prioridad, setPrioridad] = useState('')





    const [image, setImage] = useState('')

    const sigCanvas = useRef({})

    const limpiar = () => sigCanvas.current.clear()
    /* const guardar = () => console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")); */
    
    const guardar = (e) => {
        const firma_cliente = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        setFirma_cliente(firma_cliente);
        previewFiles(firma_cliente)
    }

    

    const params = useParams()
    const {mostrarAlerta, alerta, submitProyecto, proyecto} = useProyectos()

    useEffect(() => {
        if (params.id) {
            setId(proyecto._id)
            setOrden(proyecto.orden)
            setNombre(proyecto.nombre)
            setDireccion(proyecto.direccion)

            setNumero(proyecto.numero)
            setInterior(proyecto.interior)

            setColonia(proyecto.colonia)
            setCiudad(proyecto.ciudad)
            setTel(proyecto.tel)
            setCp(proyecto.cp)
            setEstado(proyecto.estado)
            setSolicitud_fecha(proyecto.solicitud_fecha?.split('T')[0])
            setHora(proyecto.hora)

            setVisita_fecha(proyecto.visita_fecha?.split('T')[0])
            setVisita_fecha_servicios(proyecto.visita_fecha_servicios?.split('T')[0])

            setHora_entrada(proyecto.hora_entrada)
            setHora_salida(proyecto.hora_salida)
            setReporte_cliente(proyecto.reporte_cliente)
            setAcciones_realizadas(proyecto.acciones_realizadas)
            setSeguimiento(proyecto.seguimiento)
            setMaterial_utilizado(proyecto.material_utilizado)
            setComentarios_cliente(proyecto.comentarios_cliente)
            setFirma_pax(proyecto.firma_pax)
            setFirma_cliente(proyecto.firma_cliente)
            setHora_sr(proyecto.hora_sr)
            setReporto_sr(proyecto.reporto_sr)
            setReportopax_sr(proyecto.reportopax_sr)
            setFecha_sr(proyecto.fecha_sr)
            setPrioridad(proyecto.prioridad)

            /* setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente) */
        } 
    }, [params])

    function previewFiles(firma_cliente){
        const reader = new FileReader()
        reader.readAsDataURL(firma_cliente)

        reader.onloadend = () => {
            setFirma_cliente(reader.result)
            console.log(image);
        }

    }

    const handleChange = (e) => {
        const firma_cliente = e.target.files[0];
        setFirma_cliente(firma_cliente);
        previewFiles(firma_cliente)
    }
    

    const handleSubmit = async e => {
        e.preventDefault()
        if ([orden, nombre/* , direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente */ ].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            
            return
            
        }

        //pasar los datos a provider
        await submitProyecto({ id, orden, nombre, direccion, numero, interior ,colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, visita_fecha_servicios, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente, hora_sr, reporto_sr, reportopax_sr, fecha_sr, prioridad })

        setId(null)
        setOrden('')
        setNombre('')
        setDireccion('')

        setNumero('')
        setInterior('')
        setVisita_fecha_servicios('')

        setColonia('')
        setCiudad('')
        setTel('')
        setCp('')
        setEstado('')
        setSolicitud_fecha('')
        setHora('')
        setVisita_fecha('')
        setHora_entrada('')
        setHora_salida('')
        setReporte_cliente('')
        setAcciones_realizadas('')
        setSeguimiento('')
        setMaterial_utilizado('')
        setComentarios_cliente('')
        setFirma_pax('')
        setFirma_cliente('')
        setHora_sr('')
        setReporto_sr('')
        setReportopax_sr('')
        setFecha_sr('')
        setPrioridad('')
        
    }

    const {msg} = alerta
    

  return (
    
    
<div className="max-w-8xl mx-auto bg-white px-3 py-2">





    

	<form 
    className='grid  mb-6 grid-cols-1 '
    onSubmit={handleSubmit}>

        <div className="text-lg font-bold text-slate-700 mt-10 underline underline-offset-4 decoration-yellow-500 mb-8">
            SOLICITUD DE SERVICIO
        </div>

    <div className="md:grid grid-cols-3 gap-6">


   

    

        {/* //orden */}
        <div> 
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='orden'> 
                Orden
            </label>
            <input 
            id='orden'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5' 
            placeholder='orden'
            value={orden}
            onChange={e => setOrden(e.target.value)}
            />
        </div>
        {/* //Solitud Fecha */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='solicitud_fecha'>
                Solicitud Fecha 
            </label>
            <input 
            id='solicitud_fecha'
            type="date" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={solicitud_fecha}
            onChange={e => setSolicitud_fecha(e.target.value)}
            />
        </div>
        {/* //Hora Solicitud */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='hora_sr'>
                Hora Solicitud Servicio
            </label>
            <input 
            id='hora_sr'
            type="time" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={hora_sr}
            onChange={e => setHora_sr(e.target.value)}
            />
        </div>
        {/* //visita fecha */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='visita_fecha'>
                Visita Fecha Promesa
            </label>
            <input 
            id='visita_fecha'
            type="date" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={visita_fecha}
            onChange={e => setVisita_fecha(e.target.value)}
            />
        </div>
             {/* //Hora  */}
         <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='hora'>
                Hora 
            </label>
            <input 
            id='hora'
            type="time" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={hora}
            onChange={e => setHora(e.target.value)}
            />
        </div>


        {/* nombre */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='nombre'>
                Nombre Cliente
            </label>
            <input 
            id='nombre'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>
        {/* TEL */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='tel'>
                Tel
            </label>
            <input 
            id='tel'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='Tel'
            value={tel}
            onChange={e => setTel(e.target.value)}
            />
        </div>

        {/* direccion */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='direccion'>
                Dirección
            </label>
            <input 
            id='direccion'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            placeholder='direccion'
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            />
        </div>

        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='numero'>
                Número
            </label>
            <input 
            id='numero'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='numero'
            value={numero}
            onChange={e => setNumero(e.target.value)}
            />
        </div>

        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='interior'>
                Interior
            </label>
            <input 
            id='interior'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='interior'
            value={interior}
            onChange={e => setInterior(e.target.value)}
            />
        </div>




            {/* colonia */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='colonia'>
                Colonia
            </label>
            <input 
            id='colonia'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='colonia'
            value={colonia}
            onChange={e => setColonia(e.target.value)}
            />
        </div>
        {/* ciudad */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='ciudad'>
                Ciudad
            </label>
            <input 
            id='ciudad'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='ciudad'
            value={ciudad}
            onChange={e => setCiudad(e.target.value)}
            />
        </div>


        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='cp'>
                Código Postal
            </label>
            <input 
            id='cp'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='CP'
            value={cp}
            onChange={e => setCp(e.target.value)}
            />
        </div>
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='estado'>
                Estado
            </label>
            <input 
            id='estado'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'            
            placeholder='Estado'
            value={estado}
            onChange={e => setEstado(e.target.value)}
            />
        </div>
        {/* reporte cliente */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='reporte_cliente'>
                Reporte Cliente
            </label>
            <textarea 
            id='reporte_cliente'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={reporte_cliente}
            onChange={e => setReporte_cliente(e.target.value)}
            />
        </div>
        {/* reporto */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='reporto'>
                Reporto
            </label>
            <textarea 
            id='reporto'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={reporto_sr}
            onChange={e => setReporto_sr(e.target.value)}
            />
        </div>
        {/* reporto PAX */}
        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='reportopax_sr'>
                Reporto PAX
            </label>
            <textarea 
            id='reportopax_sr'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={reportopax_sr}
            onChange={e => setReportopax_sr(e.target.value)}
            />
        </div>

        <div>
            <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            htmlFor='prioridad'
            >
                Prioridad
            </label>
            
            <select 
            id='prioridad'
            type='text'
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={prioridad}
            onChange={e => setPrioridad(e.target.value)}
            >
                <option value="">-- Seleccionar -- </option>

                {PRIORIDAD.map( opcion => (
                    <option key={opcion}>{opcion}</option>
                ))}

            </select>
        </div>
    









        </div> {/* se cierra las de 3 columnas */}

        <div className="text-lg font-bold text-slate-700 mt-10 underline underline-offset-4 decoration-yellow-500">
            CREAR SERVICIO
        </div>

    

     <div className="grid gap-6 mb-6 lg:grid-cols-3  mt-10">

  
     <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='visita_fecha_servicios'>
                Visita Fecha
            </label>
            <input 
            id='visita_fecha_servicios'
            type="date" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={visita_fecha_servicios}
            onChange={e => setVisita_fecha_servicios(e.target.value)}
            />
        </div>



        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='hora_entrada'>
                Hora Entrada
            </label>
            <input 
            id='hora_entrada'
            type="time" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={hora_entrada}
            onChange={e => setHora_entrada(e.target.value)}
            />
        </div>

        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='hora_salida'>
                Hora Salida
            </label>
            <input 
            id='hora_salida'
            type="time" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={hora_salida}
            onChange={e => setHora_salida(e.target.value)}
            />
        </div>



        <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='acciones_realizadas'>
                Acciones Realizadas
            </label>
            <textarea 
            id='acciones_realizadas'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={acciones_realizadas}
            onChange={e => setAcciones_realizadas(e.target.value)}
            />
        </div> 



            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
                htmlFor='seguimiento'>
                    seguimiento
                </label>
                <textarea 
                id='seguimiento'
                type="text" 
                className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
                value={seguimiento}
                onChange={e => setSeguimiento(e.target.value)}
                />
            </div>


            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
                htmlFor='material_utilizado'>
                    Material Utilizado
                </label>
                <textarea 
                id='material_utilizado'
                type="text" 
                className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
                value={material_utilizado}
                onChange={e => setMaterial_utilizado(e.target.value)}
                />
            </div>

            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
                htmlFor='comentarios_cliente'>
                    Comentarios del Cliente
                </label>
                <textarea 
                id='comentarios_cliente'
                type="text" 
                className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
                value={comentarios_cliente}
                onChange={e => setComentarios_cliente(e.target.value)}
                />
            </div>

            <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"'
            htmlFor='firma_pax'>
                firma_pax
            </label>
            <textarea 
            id='firma_pax'
            type="text" 
            className='bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg  block w-full p-2.5'
            value={firma_pax}
            onChange={e => setFirma_pax(e.target.value)}
            />
        </div>

        </div>



        

            <div>
            {firma_pax === '' || firma_cliente ?  <p>Firma deshabilitada</p> : 
                 
                 <SignaturePad
                    id='fileInput'
                    value={firma_cliente}
                    accept='image/png, image/jpeg, image/jpg'
                    ref={sigCanvas}
                    
                    canvasProps={{
                        className: "border-2 mb-5 w-[310px] h-[200px] md:w-[850px]" ,
                        /* width: 800, height: 200, */
                    }} />}
            </div>

              

    

     

                 
            
            {msg && <Alerta alerta={alerta} />}
                   

                    
                    
                    
                    
                    

        <input 
        onClick={guardar}
        type="submit"
        value={id ? 'Actualizar Servicio' : 'Crear Servicio'}
        className='text-center bg-sky-600 w-full p-3 font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors'></input>

    </form>

    <button onClick={limpiar} className='  bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded '>Limpiar Firma</button>

    {/* <div>
    <h1>IMPRESION DE FIRMA PRUEBA</h1>
    <img src={firma_cliente} alt="" />
    </div> */}

      {/* //firma */}
      {/* <div className='bg-yellow-500 mb-10'>
            <h1>ejemplo de pop up</h1>
            
            
        </div> */}

	<p className="mt-5 text-white">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
		more by going to the official <a className="text-white hover:underline"
			href="/" target="_blank">Flowbite
			Documentation</a>.
	</p>
</div>
  )
}

export default FormularioProyecto