import React from "react";
import emailjs from "emailjs-com";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function Contacto() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_rg18144",
          "template_httqo6d",
          e.target,
          "user_Stg5159fb3qxm0lYluqAN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="imagen-fondo-contacto p-5 mb-2">
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto text-white form  p-4 color-vino-fondo bordes"
      >
        <div>
          <h1 className="text-center peso-bold tamaño-grande"> CONTACTO </h1>
          <div className="card-body">
            <Row className="mb-3">
              <Form.Group
                className="tamaño-medio peso-medium"
                as={Col}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label className="tamaño-chico">Nombre*</Form.Label>
                <Form.Control type="text" required name="name" />
                <Form.Control.Feedback className="text-white-50 tamaño-chico" type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="tamaño-chico">Whatsapp*</Form.Label>
                <Form.Control
                  className="mb-sm-0"
                  type="text"
                  required
                  name="cel"
                />
                <Form.Control.Feedback className="text-white-50 tamaño-chico" type="invalid">
                  Ingrese su número de whatsapp completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="mt-3 tamaño-chico">Email*</Form.Label>
                <Form.Control type="email" required name="email" />
                <Form.Control.Feedback className="text-white-50 tamaño-chico" type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="mt-3 tamaño-chico">Mensaje</Form.Label>
                <InputGroup>
                  <Form.Control as="textarea" name="msj" />
                </InputGroup>
                <span className="mt-1 text-white-50 tamaño-chico">* Campo requerido</span>
              </Form.Group>
            </Row>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <Button
            className="color-vino "
            variant="light"
            size="lg"
            type="submit"
            value="Send"
          >
            <b>Enviar</b>
          </Button>
        </div>
      </Form>
    </div>
  );
}
