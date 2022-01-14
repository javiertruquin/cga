import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Papa from "papaparse";
import PartnersCard from "../components/PartnersCard";

export default function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const getPartners = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vTv9kd6S86yFx_TNKwiheAMD_EZEQOEfEV3un9D3wFm9IAVpMbu78BqEwoTSYagZ8_eBaiCAnvWwRIg/pub?gid=632412446&single=true&output=csv"
            );

            const marcas = Papa.parse(response.data, { header: true });

            setPartners(marcas.data);
        };
        getPartners();
    }, []);
    return (
        <div className="container text-center">
            <h1 className='text-center peso-bold tamaño-grande mt-5'>Convenios empresariales con empresa:</h1>
            <p className='text-center peso-bold tamaño-medio'> La forma de garantizar la excelencia en este proyecto es trabajando juntos</p>
            {/* <h1 className="mt-4 mt-lg-5 pt-3">Conoce nuestros partners de confianza </h1>
            <h2 className="mb-5 pb-3"> la forma de garantizar la excelencia en este proyecto es trabajando juntos</h2> */}
            <div className="mb-5 d-flex flex-wrap justify-content-around">
                    {partners.map((partners, id) => (
                        <PartnersCard key={id} data={partners} />
                    ))}
                </div>
        </div>
    )
}
