import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Presentacion() {
  return (
    <>
        <section class="relative">
            <div class="flex flex-col mb-8 bg-gradient-to-tr from-white to-[#bee1e5] p-12 md:h-[25em] h-[20em] relative overflow-hidden">
                <img class="absolute hidden md:block object-cover top-0 right-0 z-10 w-auto h-[42rem]" src="./img/WhatsApp Image 2024-11-22 at 2.49.37 AM.png" alt=""/>             
                <div className="flex justify-center items-center md:justify-start">
                    <h1 class="text-8xl md:text-9xl xl:text-[12rem] text-grisOscuro  font-bold xl:pl-24 pt-8 md:pt-24 pb-5">Juli Merlo</h1>
                </div>
                <div className="flex justify-center items-center md:justify-start" >
                    <p class="p-3 xl:pl-24 text-5xl text-grisOscuro">Descubriras tu poder</p>
                </div>
                <div class="flex gap-3 p-5 xl:pl-24 justify-center md:justify-start">
                <FaSquareFacebook className="text-grisOscuro text-4xl md:text-5xl" />
                <FaTwitterSquare className="text-grisOscuro text-4xl md:text-5xl" />
                <IoLogoYoutube className="text-grisOscuro text-4xl md:text-5xl" />
                <RiInstagramFill className="text-grisOscuro text-4xl md:text-5xl" />
                </div>
            </div>
            <div class="flex justify-between absolute right-0 z-10 bottom-[0rem] md:bottom-[-3rem] gap-1">
                <div class="bg-celeste py-4 md:py-10 px-24 md:px-36 xl:px-48 text-dm">
                    <p class="text-grisOscuro text-[1.2rem] md:text-4xl text-center">Descubre JMFit</p>
                </div>
                <div class="bg-grisOscuro py-4 md:py-10 px-24 md:px-36 xl:px-48 text-dm">
                    <p class="text-blanco text-[1.2rem] md:text-4xl text-center">Reservar sesíon</p>
                </div>
            </div>
        </section>
    </>
  )
}
