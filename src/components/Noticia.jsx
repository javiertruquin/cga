import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import NoticiaCard from "../components/NoticiaCard";
import { Nav } from "react-bootstrap";

export default function Noticia() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const getNoticias = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vTv9kd6S86yFx_TNKwiheAMD_EZEQOEfEV3un9D3wFm9IAVpMbu78BqEwoTSYagZ8_eBaiCAnvWwRIg/pub?gid=0&single=true&output=csv"
            );

            const productos = Papa.parse(response.data, { header: true });

            setNoticias(productos.data);
        };
        getNoticias();
    }, []);
    return (
        <div className="container mt-4">
            <div className="text-center">
                <p className="tamaño-grande color-negro mb-0">Noticias</p>
                <div className="mb-5 d-flex flex-wrap justify-content-around">
                    {noticias.slice(0,3).map((noticia, id) => (
                        <NoticiaCard key={id} data={noticia} />
                    ))}
                </div>
                <Nav.Link className="sin-sub color-gris-tenue" to="/noticias">
                    <p className="color-vino">Ver todas las noticias</p>
                </Nav.Link >
            </div>
        </div>
    );
}
