import jsPDF from "jspdf";
import "jspdf-autotable";
import {useState, useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import { formatearFecha } from '../helpers/formatearFecha'




export default function GeneratePDF({servicios}){


    const [printData, setPrintData] = useState([])
    const { proyecto } = useProyectos()
    const { orden, nombre, direccion, colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, visita_fecha, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente } = proyecto


    useEffect(() => {
    setPrintData([proyecto])
    }, [proyecto])
    

    function generate(){


        
        const doc = new jsPDF()

        const imgData = "/src/assets/img/OS.png";
        doc.addImage(imgData, 'JPEG',0,0,210,297, undefined,'FAST');
        console.log(imgData)

        doc.setFontSize(8);
        doc.text(168, 19, `${formatearFecha(solicitud_fecha)}`);
        
        doc.text(176, 25, `${hora}`);
        doc.text(168, 31, `${formatearFecha(visita_fecha)}`);
        doc.text(176, 38, `${hora_entrada}`);
        doc.text(176, 44, `${hora_salida}`);

        
        
        doc.setFontSize(8);
        doc.text(45, 82, `${nombre}`);
        doc.text(40, 90, `${direccion}`);
        doc.text(30, 99, `${colonia}`);
        doc.text(30, 108, `${ciudad}`);
        doc.text(130, 108, `${estado}`);
        doc.text(170, 108, `${cp}`);
        doc.text(35, 116, `${tel}`);


        const rCliente = doc.splitTextToSize(`${reporte_cliente}`, 152)
        doc.text(rCliente, 45, 139, { lineHeightFactor: 2.3 }  )
         

        const aRealizadas = doc.splitTextToSize(`${acciones_realizadas}`, 152)
        doc.text(aRealizadas, 45, 158, { lineHeightFactor: 2.3 }  )

        const aSeguimiento = doc.splitTextToSize(`${seguimiento}`, 145)
        doc.text(aSeguimiento, 52, 176, { lineHeightFactor: 2.3 }  )

        const mUtilizado = doc.splitTextToSize(`${material_utilizado}`, 145)
        doc.text(mUtilizado, 52, 195, { lineHeightFactor: 2.3 }  )

        const cCliente = doc.splitTextToSize(`${comentarios_cliente}`, 145)
        doc.text(cCliente, 52, 215, { lineHeightFactor: 2.3 }  )

        
        
       
        doc.text(55, 248, `${firma_pax}`);
       

        const firma = `${firma_cliente}`;
        doc.addImage(firma, 'JPEG',149,240,16,7, undefined,'FAST');
        console.log(firma)

        doc.setTextColor(255,0,0);
        doc.setFontSize(20);
        doc.text(175, 73, `${orden}`);
        
        

        
        doc.internal.events.subscribe('addPage', function() { pageSize = view.doc.internal.pageSize; doc.addImage(myimage, 'JPG', 0, 0, pageSize.width, pageSize.height); });
        
        //doc.addPage();
        //doc.text(20, 20, 'Do you like that?');

/*         doc.autoTable({
            head: [['orden', 'cliente', 'direccion']],
            body: 
            printData.map(({orden, cliente, direccion}) =>{
                return [
                    orden, cliente, direccion
                ]
            })
        }) */

        doc.save(`${orden}.pdf`)
    }

  

    return (
        
            <button  className='bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group' type="primary" onClick={generate}>Descargar Orden de Servicio PDF</button>
        
    )
}

