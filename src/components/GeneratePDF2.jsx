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

        const imgData = "https://res.cloudinary.com/dja0jtruu/image/upload/v1659365503/solicitudServicio_bmpeod.png";
        doc.addImage(imgData, 'JPEG',0,0,210,112, undefined,'FAST');
        /* console.log(imgData) */

        doc.setFontSize(8);
        doc.text(168, 19, `${dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        
        doc.text(173, 24, `${hora_sr}`);
        doc.text(62, 37, `${dayjs(visita_fecha).locale("es").add(1, 'day').format("dddd")}`);
        doc.text(114, 37, `${dayjs(visita_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        doc.text(176, 37, `${hora}`);
       

        
        
        doc.setFontSize(8);
        doc.text(40, 50, `${nombre}`);
        doc.text(152, 50, `${tel}`);
        doc.text(40, 57, `${direccion} ${numero} ${interior}`);
        doc.text(130, 64, `${ciudad}`);
        doc.text(40, 64, `${colonia}`);
        doc.text(184, 64, `${cp}`);
        doc.text(40, 71, `${estado}`);

        /* doc.text(40, 88, `${reporte_cliente}`); */

        const rCliente = doc.splitTextToSize(`${reporte_cliente}`, 160)
        doc.text(rCliente, 40, 78, { lineHeightFactor: 2.3 }  )

        doc.text(40, 98, `${reporto_sr}`);
        doc.text(40, 105, `${reportopax_sr}`);
      

        doc.setTextColor(255,0,0);
        doc.setFontSize(18);
        doc.text(184, 13, `${orden}`);
  
        

        
        doc.internal.events.subscribe('addPage', function() { pageSize = view.doc.internal.pageSize; doc.addImage(myimage, 'JPG', 0, 0, pageSize.width, pageSize.height); });
        


        doc.save(`${orden}.pdf`)
    }

  

    return (
        
            <button  className='bg-yellow-500 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group' type="primary" onClick={generate2}>Descargar Solicitud de Servicio PDF</button>
        
    )
}

