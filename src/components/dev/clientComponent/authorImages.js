'use client';

import Image from "next/image";
import DebugJson from "../debugJson/debugJson";
import { useEffect, useState } from 'react';


const AuthorsImages = ({name}) => {

    const [data, setData] = useState([]); 


    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:3000/api/images?author=${name}`);

            const result = await response.json();

            setData(result);

        }

        fetchData();

    }, []);

    return (
        <div>
            {data.map((data, index) => (
                // <DebugJson key={index} content={data.author} />
                <Image key={index} src={data.path} alt={'eh'} width={200} height={200} />
            ))}
        </div>
    )

}

export default AuthorsImages;