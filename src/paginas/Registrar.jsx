import {useState} from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'


const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState({})
  const [alerta, setAlerta] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      return
    }

    if (password.length < 6) {
      setAlerta({
        msg: 'El password es muy corto, al menos 6 caracteres',
        error: true
      })
      return
    }

    setAlerta({})
    // crear el usuario en la api
        try {
          const {data} = await clienteAxios.post(`/usuarios`, { nombre, email, password})
          
          setAlerta({
            msg: data.msg,
            error: false
          })

          setNombre('')
          setEmail('')
          setPassword('')
          setRepetirPassword('')

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
      <h1 className='text-sky-600 font-black text-6xl '> <span className='text-slate-700'>Admin</span></h1>
      {msg && <Alerta alerta={alerta} /> }
      <form 
      onSubmit={handleSubmit}
      className='my-10 bg-white shadow rounded-lg p-10'>
        <div className='my-5'>
          <label className='text-gary-600 block text-xl font-bold' htmlFor='email'>Nombre</label>
          <input 
          id='nombre'
          type="text" 
          placeholder='Tu nombre'
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label className='text-gary-600 block text-xl font-bold' htmlFor='email'>Email</label>
          <input 
          id='email'
          type="email" 
          placeholder='Email de registro'
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label className='text-gary-600 block text-xl font-bold' htmlFor='email'>Password</label>
          <input 
          id='password'
          type="password" 
          placeholder='Password de registro'
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label className='text-gary-600 block text-xl font-bold' htmlFor='email'>Repetir Password</label>
          <input 
          id='password2'
          type="password" 
          placeholder='repetir Password de registro'
          className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          value={repetirPassword}
          onChange={e => setRepetirPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Crear Cuenta" className='bg-sky-700 mb-5 w-full py-3 text-white font-bold rounded hover:cursos-pointer hover:bg-sky-800 transition-colors' />
      </form>

      <nav className='lg:flex lg:justify-between'>
          <Link
          className='block text-center my-5 text-slate-500 text-sm'
          to="/"
          > ¿Ya tienes cuenta, Inicia Sesion 
          </Link>
          <Link
          className='block text-center my-5 text-slate-500 text-sm'
          to="/olvide-password"
          > Olvide mi password 
          </Link>
      </nav>
    </>
  )
}

export default Registrar