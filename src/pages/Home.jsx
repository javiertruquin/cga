import Beneficios from "../components/Beneficios";
import Contacto from "../components/Contacto";
import NavBarReact from "../components/NavBarReact";
import Noticia from "../components/Noticia";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Asociarse from "../components/Asociarse";

export default function Home() {
    return (
        <div  >
            <NavBarReact  />
            <Slider />
            <Noticia />
            <Asociarse />
            <Beneficios />
            <Contacto />
            <Footer />
        </div>
    );
}
