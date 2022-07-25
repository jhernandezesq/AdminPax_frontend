import jsPDF from "jspdf";
import "jspdf-autotable";
import {useState, useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es'



export default function GeneratePDF2({servicios}){


    const [printData, setPrintData] = useState([])
    const { proyecto } = useProyectos()
    const { orden, nombre, direccion, numero, interior, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente, hora_sr, reporto_sr, reportopax_sr } = proyecto


    useEffect(() => {
    setPrintData([proyecto])
    }, [proyecto])
    

    function generate2(){


        
        const doc = new jsPDF('l', 'mm', [210, 112])

        const imgData = "https://res.cloudinary.com/dja0jtruu/image/upload/v1655914955/SSv2_iqqdfk.png";
        doc.addImage(imgData, 'JPEG',0,0,210,112, undefined,'FAST');
        /* console.log(imgData) */

        doc.setFontSize(8);
        doc.text(168, 22, `${dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        
        doc.text(173, 28, `${hora_sr}`);
        doc.text(62, 42, `${dayjs(visita_fecha).locale("es").add(1, 'day').format("dddd")}`);
        doc.text(114, 42, `${dayjs(visita_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        doc.text(176, 42, `${hora}`);
       

        
        
        doc.setFontSize(8);
        doc.text(40, 57, `${nombre}`);
        doc.text(152, 57, `${tel}`);
        doc.text(40, 65, `${direccion} ${numero} ${interior}`);
        doc.text(130, 73, `${ciudad}`);
        doc.text(40, 73, `${colonia}`);
        doc.text(184, 73, `${cp}`);
        doc.text(40, 80, `${estado}`);
        doc.text(40, 88, `${reporte_cliente}`);
        doc.text(40, 96, `${reporto_sr}`);
        doc.text(40, 104, `${reportopax_sr}`);
      

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

