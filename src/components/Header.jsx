import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from './Busqueda'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import paxCirculo from '../assets/img/pax-circulo.png'
import paxlogo from '../assets/img/pax2.png'



const Header = () => {

  const {auth} = useAuth()

  const navigation = [
    { name: 'Servicio', href: 'crear-proyecto', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false},
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const {handleBuscador, cerrarSesionProyectos} = useProyectos()
  const {cerrarSesionAuth} = useAuth()

  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to='/proyectos'>
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={paxlogo}
                  alt="Workflow"
                />
                </Link>
                <Link to='/proyectos'>
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={paxlogo}
                  alt="Workflow"
                />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 ">
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))} */}
                  
                  <Link to='/proyectos'
                  className='cursor-pointer bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center'
                  >
                  Lista Servicios
                  </Link>
                  <Link to='crear-proyecto'
                  className='cursor-pointer bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center'
                  >
                  Crear Servicio
                  </Link>
                  <button 
                  className='cursor-pointer bg-gray-900 hover:bg-gray-700 text-white py-2 px-8 rounded inline-flex items-center'
                  onClick={handleBuscador}
                  >
                  Buscar
                  </button>
                 
                  <Busqueda /> 
                  
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                
              </button>
              <h1 className='hidden text-gray-400 md:block'>Bienvenido: <span className='text-bold '>{auth.nombre}</span></h1>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={paxCirculo}
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          onClick={handleCerrarSesion}
                        >
                          Cerrar Sesión
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))} */}
              
               <Link to='/proyectos'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center uppercase'
                  >
                  Lista de Servicios
                </Link>
               <Link to='crear-proyecto'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center uppercase'
                  >
                  Crear Servicio
                </Link>
                <button 
                  className='text-gray-300 w-full hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase'
                  onClick={handleBuscador}
                  >
                  Buscar
                  </button>
               
                  
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default Header