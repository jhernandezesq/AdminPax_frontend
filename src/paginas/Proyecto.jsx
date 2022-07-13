import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import ModalFormularioTareas from "../components/ModalFormularioTareas";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import Tarea from "../components/Tarea";
import Alerta from "../components/Alerta";
import Resumen from "../components/Resumen";

import io from "socket.io-client";

let socket;

const Proyecto = () => {
  const params = useParams();
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    handleModalTarea,
    alerta,
    submitTareasProyecto,
    eliminarTareaProyecto,
    actualizarTareaProyecto,
    cambiarEstadoTarea,
    elimarProyecto,
  } = useProyectos();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const handleClick = () => {
    if (confirm("¿Deseas Eliminar este proyecto?")) {
      elimarProyecto(params.id);
    }
  };

  //useEffect de socketio
  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("abrir proyecto", params.id);
  }, []);

  useEffect(() => {
    socket.on("tarea agregada", (tareaNueva) => {
      if (tareaNueva.proyecto === proyecto._id) {
        submitTareasProyecto(tareaNueva);
      }
    });

    socket.on("tarea eliminada", (tareaEliminada) => {
      if (tareaEliminada.proyecto === proyecto._id) {
        eliminarTareaProyecto(tareaEliminada);
      }
    });

    socket.on("tarea actualizada", (tareaActualizada) => {
      if (tareaActualizada.proyecto._id === proyecto._id) {
        actualizarTareaProyecto(tareaActualizada);
      }
    });

    socket.on("nuevo estado", (nuevoEstadoTarea) => {
      if (nuevoEstadoTarea.proyecto._id === proyecto._id) {
        cambiarEstadoTarea(nuevoEstadoTarea);
      }
    });
  });

  const { nombre } = proyecto;
  /* console.log(proyecto); */

  if (cargando) return "Cargando...";

  const { msg } = alerta;

  return (
    <>
      <div className="flex justify-between mb-2">
        
          <button className="bg-orange-500 text-center rounded text-white w-40 h-10 md:h-10 hover:bg-orange-700 ">
          <Link
            className="flex justify-center	"
            to={`/proyectos/editar/${params.id}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            EDITAR SERVICIO
          </Link>
          </button>

        

        <button
          className="bg-red-700 text-center rounded text-white w-40 h-10 md:h-10 hover:bg-red-500"
          type="primary"
          onClick={handleClick}
        >
          ELIMINAR
          
        </button>

      </div>

      <Resumen></Resumen>

      <ModalFormularioTareas
      /* modal={modal}
      setModal={setModal} */
      />
      <ModalEliminarTarea />

      <p className="font-bold text-xl mt-10">Comentarios</p>

      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))
        ) : (
          <p className="text-center my-5 p-10">
            No hay comentarios en este proyecto
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-10">
        <p className="font-bold text-xl text-gray-500">Final de comentarios</p>
        <Link
          to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
          className="text-gray-400 font-bold hover:text-black"
        >
          {/* Añadir */}
        </Link>
      </div>
    </>
  );
};

export default Proyecto;
