import Header from "../template/Header"
import Footer from "../template/Footer"
import Inicio from "../inicio/Inicio"


export default function Layout() {
  return (
    <>
        <Header/>
        <main className="h-100vh">
            <Inicio/>
        </main>
        <Footer/>
    </>
  )
}
