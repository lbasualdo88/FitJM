export default function LeerMasUno() {
    return (
      <>
        <section className="flex items-center justify-center py-16 bg-blanco md:my-[10rem]">
          <div className="flex items-center justify-start relative">
            <div className="bg-celeste w-full md:w-[60rem] h-[35rem] xl:w-[80rem] md:h-[30em] overflow-hidden md:ml-[-24rem]">
                    <img
                    className="object-cover w-auto h-auto "
                    src="./img/Captura de pantalla 2024-11-22 041042.png"
                    alt="Entrenadora"
                    />
            </div>
            
            <div className="bg-amarillo m-8 p-10 gap-5  md:h-[42rem] md:w-[60rem]  flex flex-col justify-center absolute bottom-[-17rem] md:left-[-5rem] xl:left-[15rem]">
                    <h1 className="md:py-6 px-4 text-6xl md:text-8xl leading-[4rem] font-medium text-grisOscuro">
                    Hola, soy Juli
                    </h1>
                    <h2 className="md:p-4 p-3 text-4xl font-normal text-grisOscuro">
                    Profesora de educación física
                    </h2>
                    <p className="p-4 pb-5 text-2xl md:text-3xl text-grisOscuro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                    molestiae atque id quasi excepturi vitae ad, aspernatur expedita
                    recusandae qui. Consectetur nam nemo optio placeat id. Earum
                    exercitationem illo unde?
                    </p>
                    <div className="bg-grisOscuro p-5 md:mt-20">
                    <p className="text-4xl text-blanco text-center">Leer más</p>
                    </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  