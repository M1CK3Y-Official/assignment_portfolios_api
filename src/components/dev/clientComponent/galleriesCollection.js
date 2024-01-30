'use client';

import { useEffect, useState } from 'react';
import DebugJson from "../debugJson/debugJson";
import GalleryImages from "./galleryImages";



const GalleriesCollection = ({gallery}) => {

    const [data, setData] = useState([]); 
    const [galleryName, setGalleryName] = useState(gallery); 


    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:3000/api/galleries`);

            const result = await response.json();

            setData(result);

        }

        fetchData();

    }, []);

    return (
        <div>

            
            { data.map((data, index) => (
                <button key={index} onClick={() => setGalleryName( `${data.name}` )}>{data.name}</button>
            ))}

            <h1>{galleryName}</h1>
            {galleryName ? <GalleryImages gallery={galleryName} /> : ''}

        </div>
    )

}

export default GalleriesCollection;