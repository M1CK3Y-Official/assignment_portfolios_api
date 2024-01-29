'use client';

import { useEffect, useState } from 'react';
import DebugJson from "../debugJson/debugJson";
import GalleryImages from "./galleryImages";



const GalleriesCollection = () => {

    const [data, setData] = useState([]); 
    const [galleryName, setGalleryName] = useState([]); 


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

            <button onClick={() => setGalleryName('umbra')}></button>
            <button onClick={() => setGalleryName('obscura')}></button>

            {data.map((data, index) => (
                <DebugJson key={index} content={data.name} />
                ))}

            <GalleryImages gallery={galleryName}></GalleryImages>

        </div>
    )

}

export default GalleriesCollection;