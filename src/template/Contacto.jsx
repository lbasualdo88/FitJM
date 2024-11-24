import React from 'react'

export default function Contacto() {
  return (
    <>
        <div className='flex flex-col xl:flex-row w-full xl:h-[30em]'>
            <div className='bg-celeste xl:w-1/3 xl:p-16 w-full'>
                <h1 className='text-6xl font-bold text-grisOscuro px-3 py-6 xl:px-3 xl:py-8'>Contacto</h1>
                <p className='text-3xl text-grisOscuro p-3'>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactar</p>
                <p className='text-grisOscuro text-3xl px-3 py-4 xl:py-4'>Dirección. Av. Los Rosales 122</p>
                <p className='text-grisOscuro text-3xl px-3 py-4 xl:py-4'>Rosario, Santa Fe, Argentina</p>
                <p className='text-grisOscuro text-3xl px-3 py-4 xl:py-4'>Email: jm@gmail.com</p>
                <p className='text-grisOscuro text-3xl px-3 py-4 xl:py-4'>Tel: 123456789</p>
            </div>
            <div className='flex flex-col xl:w-2/3 px-6 xl:px-[16rem] xl:py-[4rem]' >
                <form className='flex flex-col gap-12 py-8' action="">
                    <div className='flex flex-col xl:grid xl:grid-cols-2 gap-8'>
                        <div>
                            <input 
                            className='focus:outline-none py-6 text-3xl w-full border-b border-negro border-bold placeholder-grisOscuro' 
                            type="text" 
                            id="nombre"
                            name="nombre" 
                            required 
                            placeholder='Nombre'/>    
                        </div>
                        <div>
                            <input 
                            className='focus:outline-none py-6 text-3xl w-full border-b border-negro border-bold placeholder-grisOscuro' 
                            type="text" 
                            id="apellido" 
                            name="apellido" 
                            required 
                            placeholder='Apellido'/>
                        </div>
                        <div>
                            <input 
                            className='focus:outline-none py-6 text-3xl w-full border-b border-negro border-bold placeholder-grisOscuro' 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder='Email'/>
                        </div>
                        <div>
                            <input 
                            className='focus:outline-none py-6 text-3xl w-full border-b border-negro border-bold placeholder-grisOscuro' 
                            type="text" 
                            id="asunto" 
                            name="asunto" 
                            required 
                            placeholder='Asunto'/>
                        </div>
                    </div>
                    <div>
                        <textarea 
                        className='focus:outline-none w-full border-b border-negro border-bold placeholder-grisOscuro py-6 text-3xl' 
                        id="mensaje" 
                        name="mensaje" 
                        required 
                        placeholder='Escribe tu mensaje aquí...'></textarea>
                    </div>
                    <div>
                        <input 
                        className='text-center w-full py-8 hover:bg-amarillo text-negro text-4xl' 
                        type="submit" 
                        value="Enviar"/>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
