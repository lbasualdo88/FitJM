

export default function LeerMasDos() {
    return (
      <>
        <section className="my-[16rem] py-20">
          <div className="flex md:justify-end py-8 relative justify-center w-full">
            <div className="bg-center md:w-2/3 bg-cover bg-scroll w-full md:bg-fixed bg-no-repeat h-[30em] relative" style={{ backgroundImage: "url('/img/imgGimnasio.jpg')" }}>             
            </div>
            <div className="bg-celeste p-14 md:h-[42rem] md:w-[60rem] m-8 absolute xl:left-[30rem] bottom-[-17rem] md:bottom:[-10rem] md:left-0">
                <h1 className="md:py-6 px-4 text-6xl md:text-8xl leading-[4rem] font-medium text-grisOscuro">
                    Conoce JMFit
                </h1>
                <h2 className="md:p-4 p-3 text-4xl font-normal text-grisOscuro">
                    Comencemos hoy a cambiar tu vida de forma efectiva
                </h2>
                <p className="p-4 pb-5 text-2xl md:text-3xl text-grisOscuro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                    molestiae atque id quasi excepturi vitae ad, aspernatur expedita
                    recusandae qui. Consectetur nam nemo optio placeat id. Earum
                    exercitationem illo unde?
                </p>
                <div className="bg-amarillo p-5 md:mt-20">
                    <p className="text-4xl text-grisOscuro text-center">
                    Leer más
                    </p>
                </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  