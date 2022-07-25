import jsPDF from "jspdf";
import "jspdf-autotable";
import {useState, useEffect} from 'react'
import useProyectos from "../hooks/useProyectos";
import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es'




export default function GeneratePDF({servicios}){


    const [printData, setPrintData] = useState([])
    const { proyecto } = useProyectos()
    const { orden, nombre, direccion, numero, interior ,colonia, ciudad, tel, cp, estado, solicitud_fecha, hora, hora_sr, visita_fecha, visita_fecha_servicios, hora_entrada, hora_salida, reporte_cliente, acciones_realizadas, seguimiento, material_utilizado, comentarios_cliente, firma_pax, firma_cliente } = proyecto


    useEffect(() => {
    setPrintData([proyecto])
    }, [proyecto])
    

    function generate(){


        
        const doc = new jsPDF()

        const imgData = "https://res.cloudinary.com/dja0jtruu/image/upload/v1657924158/OSmod5_jhfn6l.png";
        doc.addImage(imgData, 'JPEG',0,0,210,297, undefined,'FAST');
        /* console.log(imgData) */

        doc.setFontSize(8);
        doc.text(171, 19, `${dayjs(solicitud_fecha).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        
        
        doc.text(176, 25, `${hora_sr}`);
        doc.text(171, 31, `${dayjs(visita_fecha_servicios).locale("es").add(1, 'day').format("DD MMMM YYYY")}`);
        doc.text(176, 38, `${hora_entrada}`);
        doc.text(176, 44, `${hora_salida}`);

        
        
        doc.setFontSize(8);
        doc.text(45, 77, `${nombre}`);
        doc.text(40, 85, `${direccion}`);
        doc.text(131, 85, `${numero}`);
        doc.text(174, 85, `${interior}`);


        doc.text(30, 94, `${colonia}`);
        doc.text(30, 102, `${ciudad}`);
        doc.text(130, 102, `${estado}`);
        doc.text(170, 102, `${cp}`);
        doc.text(35, 111, `${tel}`);


        const rCliente = doc.splitTextToSize(`${reporte_cliente}`, 180)
        doc.text(rCliente, 15, 133, { lineHeightFactor: 2.3 }  )
         

        const aRealizadas = doc.splitTextToSize(`${acciones_realizadas}`, 180)
        doc.text(aRealizadas, 15, 157, { lineHeightFactor: 2.3 }  )

        const aSeguimiento = doc.splitTextToSize(`${seguimiento}`, 180)
        doc.text(aSeguimiento, 15, 194, { lineHeightFactor: 2.3 }  )

        const cCliente = doc.splitTextToSize(`${comentarios_cliente}`, 180)
        doc.text(cCliente, 15, 212, { lineHeightFactor: 2.3 }  )

        const mUtilizado = doc.splitTextToSize(`${material_utilizado}`, 180)
        doc.text(mUtilizado, 15, 230, { lineHeightFactor: 2.3 }  )  

        

        
        
       
        doc.text(55, 264, `${firma_pax}`);
       

        const firma = `${firma_cliente}`;
        doc.addImage(firma, 'JPEG',149,256,16,7, undefined,'FAST');
        /* console.log(firma) */

        doc.setTextColor(255,0,0);
        doc.setFontSize(20);
        doc.text(173, 67, `${orden}`);
        
        

        
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

