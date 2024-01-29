'use client';

import Image from "next/image";
// import DebugJson from "@/components/dev/debugJson/debugJson";
import { useEffect, useState } from 'react';


const GalleryImages = ({gallery}) => {

    const [data, setData] = useState([]); 


    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:3000/api/images?gallery=${gallery}`);

            const result = await response.json();

            setData(result);

        }

        fetchData();

    }, [galleryName]);

    return (
        <div>
            {data.map((data, index) => (
                <Image key={index} src={data.path} alt={'eh'} width={200} height={200} />
            ))}
        </div>
    )

}

export default GalleryImages;