import React from "react";
import { IoFitnessSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";


export default function Header() {

  const [navAbierto, setNavAbierto] = React.useState(false);

  function menuClick() {
    const nav = document.querySelector('.nav');
    const h = document.querySelector('.header');

    
    if (nav.classList.contains('mostrar')) {
      nav.classList.remove('mostrar');
      h.classList.remove('flexColMenu');
      nav.classList.add('hidden');
      setNavAbierto(false); // Cierra el menú
    } else {
      nav.classList.remove('hidden');
      h.classList.add('flexColMenu');
      nav.classList.add('mostrar');
      setNavAbierto(true); // Abre el menú
    }
  }

  return (
    <>
        <div className="flex md:flex-row justify-between  p-5 header">
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex gap-6 items-center">
               <div className="">  
              <img className="w-12 h-auto" src="../../public/img/kettbll.png" alt="" />
               </div>
               <h1 className="font-forum text-5xl">Juli Merlo</h1>
            </div>
            <button onClick={menuClick} className='md:hidden'>
              {navAbierto ? (
                  <IoCloseCircleOutline 
                    className="w-14 h-14 p-auto mr-3 cursor-pointer dark:text-color1" 
                    aria-label="Cerrar menú"
                  />
                ) : (
                  <IoMenu 
                    className="w-16 h-16 p-auto mr-3 cursor-pointer dark:text-color1" 
                    aria-label="Abrir menú"
                  />
                 )}
            </button>
          </div>
            <nav className="h-auto gap-6 nav hidden md:flex md:flex-row items-center justify-center">
               <a className=" text-3xl hover:text-celeste" href="">Inicio</a>
               <a className=" text-3xl hover:text-celeste" href="">Sobre mí</a>
               <a className=" text-3xl hover:text-celeste" href="">JM Fit</a>
               <a className=" text-3xl hover:text-celeste" href="">Reserva online</a>
               <a className=" text-3xl hover:text-celeste" href="">Planes y precios</a>
               <a className=" text-3xl hover:text-celeste" href="">Contacto</a>
               <div className="flex gap-2 ">                    
                <a className="font-forum text-3xl flex gap-3 hover:text-celeste items-center" href="">
                <FaUserCircle className="text-grisOscuro text-4xl" />
                Login
                </a>
               </div>      
            </nav>
           </div>
    </>
  )
}
