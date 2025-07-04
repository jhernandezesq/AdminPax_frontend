import {useState} from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return
    }

    try {
      const {data} = await clienteAxios.post(`/usuarios/olvide-password`,{ email })
      
      setAlerta({
        msg: data.msg,
        error: false
      })

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alerta

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl '>Recupera tu acceso <span className='text-slate-700'> no pierdas proyectos</span></h1>
      {msg && <Alerta alerta={alerta} />}
      <form 
      className='my-10 bg-white shadow rounded-lg p-10'
      onSubmit={handleSubmit}>
        
        <div className='my-5'>
          <label className='text-gary-600 block text-xl font-bold' htmlFor='email'>Email</label>
          <input 
          id='email'
          type="email" 
          placeholder='Email de registro'
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          value={email}
          onChange={ e => setEmail(e.target.value)}
          />
        </div>
 

        <input type="submit" value="Enviar Instrucciones" className='bg-sky-700 mb-5 w-full py-3 text-white font-bold rounded hover:cursos-pointer hover:bg-sky-800 transition-colors' />
      </form>

      <nav className='lg:flex lg:justify-between'>
          <Link
          className='block text-center my-5 text-slate-500 text-sm'
          to="/"
          > ¿Ya tienes cuenta, Inicia Sesion 
          </Link>
          <Link
          className='block text-center my-5 text-slate-500 text-sm'
          to="/registrar"
          > ¿No tienes cuenta?, registrate 
          </Link>
      </nav>
    </>
  )
}

export default OlvidePassword