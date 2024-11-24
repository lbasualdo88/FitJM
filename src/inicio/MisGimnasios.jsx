

export default function MisGimnasios() {
  return (
    <>
        <div className="h-auto xl:h-[20em] pb-5">
            <h1 className="text-5xl md:text-7xl text-grisOscuro text-center pb-8">Gimnasios donde trabajo</h1>
            <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
                <img className="w-[20rem] xl:w-[24rem] h-auto md::mx-16" src="./img/pilates.avif" alt="" />
                <img className="w-[20rem] xl:w-[24rem] h-auto md::mx-16" src="./img/trainingcenter.png" alt="" />
                <img className="w-[20rem] xl:w-[24rem] h-auto md::mx-16" src="./img/megatlon.png" alt="" />
            </div>
        </div>
    </>
  )
}
