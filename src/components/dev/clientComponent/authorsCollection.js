'use client';

import DebugJson from "../debugJson/debugJson";
import { useEffect, useState } from 'react';
import AuthorsImages from "./authorImages";



const AuthorsCollection = () => {

    const [data, setData] = useState([]); 


    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:3000/api/authors`);

            const result = await response.json();

            setData(result);

        }

        fetchData();

    }, []);

    return (
        <div>
            {data.map((data, index) => (
                <DebugJson key={index} content={data.author} />
            ))}

            <AuthorsImages name={'Lena Riis'}></AuthorsImages>

        </div>
    )

}

export default AuthorsCollection;