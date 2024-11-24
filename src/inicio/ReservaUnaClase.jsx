

export default function ReservaUnaClase() {
  return (
    <>
        <section className="flex flex-col items-center bg-grisClaro my-16 py-16 pb-24">
            <h1 className="py-10 text-7xl text-grisOscuro">Reserva una clase</h1>
            <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-5 py-5 px-4 justify-items-center">
                <div className="w-full h-auto xl:w-[40rem] md:h-auto  bg-blanco pb-5 md:mx-8">
                    <img className="w-full h-auto md:h-auto" src="../../public/img/imgGimnasio1.jpg" alt="" />
                    <div className="flex flex-col items-center gap-12 ">
                    <h2 className="text-center p-5 text-5xl text-grisOscuro">Basico</h2>
                    <a className="bg-celeste py-4 px-36 text-center text-negro " href="">Reservar ahora</a>
                    </div>
                </div>
                <div className="w-full h-auto xl:w-[40rem] md:h-auto  bg-blanco pb-5 md:mx-8">
                    <img className="w-full h-auto md:h-auto" src="../../public/img/imgGimnasio2.jpeg" alt="" />
                    <div className="flex flex-col items-center gap-12 ">
                    <h2 className="text-center p-5 text-5xl text-grisOscuro">Avanzado</h2>
                    <a className="bg-celeste py-4 px-36 text-center text-negro" href="">Reservar ahora</a>
                    </div>
                </div>
                <div className="w-full h-auto xl:w-[40rem] md:h-auto  bg-blanco pb-5 md:mx-8">
                    <img className="w-full h-auto md:h-auto" src="../../public/img/imgGimnasio3.jpg" alt="" />
                    <div className="flex flex-col items-center gap-12 ">
                    <h2 className="text-center p-5 text-5xl text-grisOscuro">Premiun</h2>
                    <a className="bg-celeste py-4 px-36 text-center text-negro " href="">Reservar ahora</a>
                    </div>
                </div>
          
            </div>
        </section>
    </>
  )
}

