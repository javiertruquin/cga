import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NoticiaCard({ data }) {
    const { id, titulo, descripcion, imagenMini } = data;
    return (
        <div className="card-propiedad ">
            <Card className="">
                <Link to={"/noticia/" + id}>
                    <Card.Img
                        className="card-foto img-fluid"
                        variant="top"
                        src={imagenMini}
                    />
                </Link>
                <Card.Body className="color-negrogris-fondo ">
                    <Card.Text className=" color-gris peso-bold text-start my-2">
                        {titulo}
                    </Card.Text>
                    <Card.Text className=" color-gris text-start my-3">   
                    {descripcion.length < 110
                        ? `${descripcion}`
                        : `${descripcion.substring(0, 97)}...`}
                    </Card.Text>
                    <Card.Text className=" text-start my-2">
                        <a className="sin-sub color-gris-tenue" href={"/noticia/" + id}>
                            Ver +
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
