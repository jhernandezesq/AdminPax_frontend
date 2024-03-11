import React from "react";

const Alerta = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? 'bg-red-500' : 'bg-green-500'} text-center p-3 rounded-2xl text-white font-bold md:text-xl text-sm py-24 my-4`}>
        {alerta.msg}
    </div>
  );
};

export default Alerta;
