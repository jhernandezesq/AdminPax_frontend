<form 
    onSubmit={handleSubmit}
    className='my-10'>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='nombre'
            >
                Nombre Tarea
            </label>
            <input 
            id='nombre'
            type='text'
            placeholder='nombre de tarea'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='descripcion'
            >
                Descripcion Tarea
            </label>
            <textarea 
            id='descripcion'
            placeholder='descripcion de tarea'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='fecha_entrega'
            >
                Fecha Entrega
            </label>
            <input 
            id='fecha_entrega'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
            className='text-gray-700 font-bold text-sm'
            htmlFor='prioridad'
            >
                Prioridad
            </label>
            
            <select 
            id='prioridad'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={prioridad}
            onChange={e => setPrioridad(e.target.value)}
            >
                <option value="">-- Seleccionar -- </option>

                {PRIORIDAD.map( opcion => (
                    <option key={opcion}>{opcion}</option>
                ))}

            </select>
        </div>

        <input 
        type='submit'
        className='bg-sky-600 hover:bg-sky-700 w-full p-3 text-white font-bold cursor-pointer transition-colors rounded'
        value={id ? 'Guardar Cambios' : 'Crear Tarea'}
        />
    </form>