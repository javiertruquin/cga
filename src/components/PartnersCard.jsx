import React from "react";
import { Card } from "react-bootstrap";

export default function PartnersCard({ data }) {
    const { titulo, logo } = data;
    return (
        <div className="m-sm-4 m-0 card-partner mt-5">
            <Card className="icono-convenios">
                <Card.Img
                    className="card-foto img-fluid"
                    variant="top"
                    src={logo}
                />
                {/* <Card.Body className=" ">
                    <Card.Text className=" color-negro peso-bold text-center my-2">
                        {titulo}
                    </Card.Text>
                </Card.Body> */}
            </Card>
        </div>
    );
}
