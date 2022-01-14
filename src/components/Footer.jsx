import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="color-negrogris-fondo text-white mt-5 p-1">
      <div className="container ">
        <div className="row ">
          {/* Column1 */}
          <div className="col-12 col-lg-4 d-flex justify-content-center p-1 mt-lg-4 mt-1">
            <ul className="list-unstyled">
              <li>
                <Image
                  style={{ width: "60px" }}
                  src="https://res.cloudinary.com/dkz/image/upload/v1635555079/CGA/Logo-CGA3_pbszgt.png"
                  alt="logo"
                />
              </li>
              <li>
                <span className="peso-bold">
                  Camara de Actividades Gastronómicas <br />
                  de Tucumán
                </span>
                <p className="tamaño-chico text-white-50">
                  Buscamos realizar nuestra actividad con seguridad, <br />{" "}
                  higiene y buen servicio. <br />
                  Todos los protocolos activados para ayudar.
                </p>
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col-12 col-lg-4  d-flex justify-content-center mt-lg-4 ">
            <ul className="list-unstyled">
              <li>
                <p className="mb-2 mt-lg-5 mb-0 tamaño-chico">
                  info <br />
                </p>
                <div>
                  <p className="mb-1">
                    <FontAwesomeIcon className="mx-1" icon={faMapMarkerAlt} />{" "}
                    <span className="peso-bold"> 25 de Mayo 123 - T400 </span>{" "}
                    <br />
                    <span className="tamaño-chico mx-3">
                      (San Miguel de Tucumán - Tucumán)
                    </span>
                  </p>
                  <p className="mb-1 peso-bold">
                    {" "}
                    <FontAwesomeIcon className="mx-1" icon={faWhatsapp} /> 381
                    1234567{" "}
                  </p>
                  <p className="mb-1 peso-bold">
                    <FontAwesomeIcon className="mx-1" icon={faEnvelope} />{" "}
                    administracion@cgatucumán.com
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column3 */}
          <div className="col-12 col-lg-4  d-flex justify-content-center  mt-lg-5 ">
            <ul className="list-unstyled  ">
              <li className="mt-3">
                <Nav.Link
                  className="text-decoration-none text-white-50 tamaño-chico  "
                  to="/colaboradores"
                  as={NavLink}
                  rel="noreferrer"
                >
                  Convenios
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  className="text-decoration-none text-white-50 tamaño-chico"
                  to="/noticias"
                  as={NavLink}
                  rel="noreferrer"
                >
                  Noticias
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  className="text-decoration-none text-white-50 tamaño-chico"
                  to="/nosotros"
                  as={NavLink}
                  rel="noreferrer"
                >
                  Nosotros
                </Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link
                  className="text-decoration-none text-white-50 tamaño-chico"
                  to="/socios"
                  as={NavLink}
                  rel="noreferrer"
                >
                  {" "}
                  Socios
                </Nav.Link>
              </li>
              <div className="ms-3 ">
                <p className="peso-bold">
                  {" "}
                  Mantenete conectado
                  <a
                    className="fs-4 text-decoration-none text-white"
                    href="https://www.facebook.com/C%C3%A1mara-de-Actividades-Gastron%C3%B3micas-de-Tucum%C3%A1n-100903429019733"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="ms-1 me-1 ms-2"
                      icon={faFacebookF}
                    />
                  </a>
                  <a
                    className="fs-4 ms-2 text-decoration-none text-white"
                    href="https://www.instagram.com/tucumancga/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} /> <br />
                  </a>
                  <span className="tamaño-chico text-white-50">
                    siguenos en nuestras redes sociales
                  </span>
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="color-gris-oscuro tamaño-chico peso-bold text-center text-md-start p-2 mb-1 d-flex justify-content-center text-dark-50">
        <div>
          <a
            className="text-decoration-none text-dark
              "
            href="https://www.dkzstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Produced by DKZ studio &copy; Studio {new Date().getFullYear()}
            Todos los derechos reservados
          </a>
        </div>
      </div>
    </div>
  );
}
