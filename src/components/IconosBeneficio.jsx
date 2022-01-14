import React from "react";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";

export default function IconosBeneficio() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div className="alinear-nav" id="Beneficios">
      <div className="flex-container mt-5 mb-5">
        <h1 className="text-center tamaño-grande peso-bold">
          Únete como Socio para disfrutar de todos nuestros BENEFICIOS
        </h1>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around mt-2  ">
            {/* icono #1 */}
            <div className="">
              <div className="text-center  ">
                <Button
                  className="border-0 bg-transparent"
                  variant="light"
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                >
                  <Image
                    className="icono"
                    src="https://res.cloudinary.com/dkz/image/upload/v1640633419/CGA/iconos%20/3_q8yq6f.png"
                    alt="charlas sobre temas laborales"
                    fluid
                  />
                  <div className="text-center tamaño-medio">
                    <h1 className="mt-3 tamaño-medio peso-bold text-black-50">
                      Charlas sobre <br /> temas laborales
                    </h1>
                    {/* <p className="fs-6 mt-2 text-black-50">Ver más</p> */}
                  </div>
                </Button>
                {/* <Collapse className="color-rojo-fondo mt-1" in={open1}>
                    <div className="text-center tamaño-medio p-3 color-blanco mx-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </Collapse> */}
              </div>
            </div>
            {/* icono #2 */}
            <div className="">
              <div className="text-center">
                <Button
                  className="border-0 bg-transparent"
                  variant="light"
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                >
                  <Image
                    className="icono"
                    src="https://res.cloudinary.com/dkz/image/upload/v1640633419/CGA/iconos%20/1_pr5id4.png"
                    alt="Acceso a convenios"
                    fluid
                  />
                  <div className="text-center tamaño-medio">
                    <h1 className="mt-3 tamaño-medio peso-bold text-black-50">
                      Acceso a convenios
                    </h1>
                    {/* <p className="fs-6 mt-2 text-black-50">Ver más</p> */}
                  </div>
                </Button>
                {/* <Collapse className="color-rojo-fondo mt-1" in={open2}>
                    <div className="text-center tamaño-medio p-3 color-blanco mx-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </Collapse> */}
              </div>
            </div>
            {/* icono #3 */}
            <div className="">
              <div className="text-center">
                <Button
                  className="border-0 bg-transparent"
                  variant="light"
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                >
                  <Image
                    className="icono"
                    src="https://res.cloudinary.com/dkz/image/upload/v1640633419/CGA/iconos%20/2_wzkhpq.png"
                    alt="Capacitaciones"
                    fluid
                  />
                  <div className="text-center tamaño-medio text-black-50 ">
                    <h1 className="mt-3 tamaño-medio peso-bold">
                      Capacitaciones
                    </h1>
                    {/* <p className="fs-6 mt-2 text-black-50">Ver más</p> */}
                  </div>
                </Button>
                {/* <Collapse className="color-rojo-fondo mt-1" in={open3}>
                    <div className="text-center tamaño-medio p-3 color-blanco mx-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </Collapse> */}
              </div>
            </div>
            {/* icono #4 */}
            <div className="">
              <div className="text-center">
                <Button
                  className="border-0 bg-transparent"
                  variant="light"
                  onClick={() => setOpen4(!open4)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open4}
                >
                  <Image
                    className="icono"
                    src="https://res.cloudinary.com/dkz/image/upload/v1640633419/CGA/iconos%20/4_pltknb.png"
                    alt="Asesoramiento Legal"
                    fluid
                  />
                  <div className="text-center tamaño-medio">
                    <h1 className="mt-3 tamaño-medio peso-bold text-black-50">
                      Asesoramiento legal, <br /> financiero y tecnológico
                      {/* <p className="fs-6 mt-2 text-black-50">Ver más</p> */}
                    </h1>
                  </div>
                </Button>
                {/* <Collapse className=" mt-1" in={open4}>
                    <div className="text-center tamaño-medio p-3 color-blanco mx-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </Collapse> */}
              </div>
            </div>
            {/* icono #5 */}
            <div className="">
              <div className="text-center">
                <Button
                  className="border-0 bg-transparent"
                  variant="light"
                  onClick={() => setOpen5(!open5)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open5}
                >
                  <Image
                    className="icono"
                    src="https://res.cloudinary.com/dkz/image/upload/v1640633419/CGA/iconos%20/5_pootjr.png"
                    alt="Informacion actual relevante del sector"
                    fluid
                  />
                  <div className="text-center tamaño-medio">
                    <h1 className="mt-3 tamaño-medio peso-bold text-black-50">
                      Información actual <br /> relevante del sector
                    </h1>
                    {/* <p className="fs-6 mt-2 text-black-50">Ver más</p> */}
                  </div>
                </Button>
                {/* <Collapse className="color-rojo-fondo mt-1" in={open5}>
                    <div className="text-center tamaño-medio p-3 color-blanco mx-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </Collapse> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-2 px-5">
        <h1 className="peso-bold tamaño-grande color-vino">
          Para asociarte completa el siguiente formulario y te contactaremos
        </h1>
      </div>
    </div>
  );
}
