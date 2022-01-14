import React from "react";
import { Button, Image } from "react-bootstrap";

export default function SociosContenido() {
  return (
    <div className="mt-5 text-center">
      <Button variant="secondary">ABONAR</Button>

      <div className="d-flex flex-wrap justify-content-center mt-5">
        <Image
          src="https://res.cloudinary.com/dkz/image/upload/v1640131720/Captura_de_pantalla_2021-12-21_210823_yflzeg.png"
          alt="obra en construccion"
          rounded
          fluid
        />
      </div>
    </div>
  );
}
