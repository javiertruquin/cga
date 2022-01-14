import React from "react";
import { Container, Image } from "react-bootstrap";

export default function NosotrosCga() {
    return (
        <div className="mt-4 mt-lg-5 pt-3 mb-5">
            <Container>
                <h1 className="mt-5 tamaño-grande color-negro peso-bold">
                    Objetivo
                </h1>
                <div className="mx-4">
                    <p>
                        La CGA tiene como objetivo, representar a empresarios y
                        emprendedores gastronómicos de la provincia de Tucumán,
                        acompañándolos en sus proyectos con asesoramiento legal,
                        financiero y tecnológico, bregando por resguardar los
                        intereses del sector.
                    </p>
                </div>
                <h1 className="tamaño-grande color-negro peso-bold">
                    Objetivo a corto plazo
                </h1>
                <div className="mx-4">
                    <p>
                        Acompañar a los asociados en todos los temas
                        relacionados a la actividad, asesoramiento
                        contable,juridico, comercialización, contribuciones,
                        etc. <br />
                        Cuestiones laborales especificas, compra de productos,
                        proveedores, descuentos.
                    </p>
                </div>
                <h1 className="tamaño-grande color-negro peso-bold">
                    Misión CGA
                </h1>
                <div className="mx-4">
                    <p>
                        Defender los derechos de todos sus asociados, promover
                        el crecimiento de sus emprendimientos y proyectos.
                        Incentivar y afianzar las Inter relaciones entre los
                        asociados a los fines de aunar criterios en pos de una
                        gastronomía moderna y responsable.
                    </p>
                </div>
                <h1 className="tamaño-grande color-negro peso-bold">
                    {" "}
                    Visión CGA{" "}
                </h1>
                <div className="mx-4">
                    <p>
                        Posicionar a la provincia como polo gastronómico del NOA
                        y ser la institución referente en gastronomía.
                    </p>
                </div>
                <h1 className="tamaño-grande color-negro peso-bold">
                    {" "}
                    ¿Como esta conformado la comision directiva?{" "}
                </h1>
                <div className="mx-4">
                    <ul>
                        <li>
                            <b>Presidenta:</b> CONSTANZA BAUQUE(LA PATISERIE)
                        </li>
                        <li>
                            <b>VicePresidenta:</b> ANTONELLA MAREGNO (OHANA)
                        </li>
                        <li>
                            <b>Vocal:</b> NICOLAS HERRERA (LA SIRIO RESTO -
                            PUNTO GUEMES)
                        </li>
                        <li>
                            <b>Vocal:</b> JUAN JOSE AVILA (SALONES PACARA)
                        </li>
                        <li>
                            <b>Vocal:</b> JAVIER RODRIGUEZ BOTTINI (CHINGA BAR -
                            SOBRE GUSTOS - SEIKO SUSHI)
                        </li>
                        <li>
                            <b>Vocal:</b> MAURICIO WOLTERS (VICTORIA BAR - SEÑOR
                            BURGUES)
                        </li>
                        <li>
                            <b>Vocal:</b> MARCELO FLORES (LAS YUNGAS)
                        </li>
                    </ul>
                </div>
                <Image
                    className="w-100"
                    src="https://res.cloudinary.com/dkz/image/upload/v1642116714/CGA/nosotros%20/foto-cga-directivos_plq39j.jpg"
                    fluid
                />
            </Container>
        </div>
    );
}
