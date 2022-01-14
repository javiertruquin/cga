import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Papa from "papaparse";
import NoticiaCard from "../components/NoticiaCard";

export default function NoticiasTodas() {
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
        <div className="container text-center">
            <p className="tamaño-grande peso-bold mt-4 mt-lg-5 pt-3">Entérate de las últimas noticias de nuestro sector</p>
            <p className="tamaño-medio peso-bold">Con la CGA siempre estás más informado</p>
            <div className="mb-5 d-flex flex-wrap justify-content-around">
                    {noticias.map((noticia, id) => (
                        <NoticiaCard key={id} data={noticia} />
                    ))}
                </div>
        </div>
    )
}
