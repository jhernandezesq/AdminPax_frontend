import jsPDF from "jspdf";
import "jspdf-autotable";
import {useState, useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import { formatearFecha } from '../helpers/formatearFecha'
import { convertTimeDay } from '../helpers/convertTimeDay'



export default function GeneratePDF2({servicios}){


    const [printData, setPrintData] = useState([])
    const { proyecto } = useProyectos()
    const { orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente, hora_sr, reporto_sr, reportopax_sr } = proyecto


    useEffect(() => {
    setPrintData([proyecto])
    }, [proyecto])
    

    function generate2(){


        
        const doc = new jsPDF('l', 'mm', [210, 105])

        const imgData = "https://res.cloudinary.com/dja0jtruu/image/upload/v1655846624/SS_clwu9c.png";
        doc.addImage(imgData, 'JPEG',0,0,210,105, undefined,'FAST');
        console.log(imgData)

        doc.setFontSize(8);
        doc.text(165, 22, `${formatearFecha(solicitud_fecha)}`);
        
        doc.text(173, 28, `${hora}`);
        doc.text(110, 42, `${formatearFecha(visita_fecha)}`);
        doc.text(62, 42, `${convertTimeDay(visita_fecha)}`);
        doc.text(176, 42, `${hora_sr}`);
       

        
        
        doc.setFontSize(8);
        doc.text(40, 57, `${nombre}`);
        doc.text(152, 57, `${tel}`);
        doc.text(45, 65, `${direccion}`);
        doc.text(45, 73, `${reporte_cliente}`);
        doc.text(45, 80, `${reporto_sr}`);
        doc.text(49, 88, `${reportopax_sr}`);

        doc.setTextColor(255,0,0);
        doc.setFontSize(18);
        doc.text(184, 15, `${orden}`);
  
        

        
        doc.internal.events.subscribe('addPage', function() { pageSize = view.doc.internal.pageSize; doc.addImage(myimage, 'JPG', 0, 0, pageSize.width, pageSize.height); });
        


        doc.save(`${orden}.pdf`)
    }

  

    return (
        
            <button  className='bg-yellow-500 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group' type="primary" onClick={generate2}>Descargar Solicitud de Servicio PDF</button>
        
    )
}

