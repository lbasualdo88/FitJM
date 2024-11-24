import Presentacion from "./Presentacion"
import LeerMasUno from "./LeerMasUno"
import LeerMasDos from "./LeerMasDos"
import ReservaUnaClase from "./ReservaUnaClase"
import JMmovil from "./JMmovil"
import Contacto from "../template/Contacto"
import MisGimnasios from "./MisGimnasios"

export default function Inicio() {
  return (
    <>
        <Presentacion />
      
        <LeerMasUno />
      
        <LeerMasDos />
     
        <ReservaUnaClase />

        <MisGimnasios/>

        <JMmovil/>
         
        <Contacto/>
     
    </>
  )
}
