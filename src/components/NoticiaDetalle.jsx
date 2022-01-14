import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";



export default function NoticiaDetalle() {
    const params = useParams();

    const [noticias, setNoticias] = useState({});
    const getNoticias = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTv9kd6S86yFx_TNKwiheAMD_EZEQOEfEV3un9D3wFm9IAVpMbu78BqEwoTSYagZ8_eBaiCAnvWwRIg/pub?gid=0&single=true&output=csv"
            );
            
            const noticias = Papa.parse(response.data, { header: true });
        const noticia1 = noticias.data;
        
        const noticiaFiltrada = noticia1.filter(
            (noticia) => noticia.id === params.id
        );
        setNoticias(noticiaFiltrada[0]);
    };
    useEffect(() => {
        getNoticias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("NoticiaDetalle ~ noticias", noticias)
    const { titulo, descripcion, imagen1, imagen2, imagen3 } = noticias;
    return (
        <>
            <Container>
                <div className="mx-auto mt-4 pt-4 mt-lg-5 pt-lg-5  tamaño-noticia ">
                    <div className="text-center mb-3 ">
                    <Carousel fade indicators={false}>
                        <Carousel.Item className="">
                            <img
                                className="mx-auto d-block w-100 sombra"
                                src={imagen1}
                                alt="imagen 1"
                            />
                        </Carousel.Item>
                        {imagen2===""?"":<Carousel.Item>
                            <img
                                className="mx-auto d-block w-100 sombra"
                                src={imagen2}
                                alt="imagen 2"
                            />
                        </Carousel.Item>}
                        {imagen3===""?"":<Carousel.Item>
                            <img
                                className="mx-auto d-block w-100 sombra"
                                src={imagen3}
                                alt="imagen 3"
                            />
                        </Carousel.Item>}
                    </Carousel>
                    </div>
                    <div className=" text-start">
                        <p className="m-0 tamaño-grande peso-bold">{titulo}</p>
                    </div>
                    <div className=" mt-1 text-start">
                        <p className="peso-bold tamaño-medio">{descripcion}</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
