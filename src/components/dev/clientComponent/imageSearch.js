'use client';
import { useSearchParams } from "next/navigation";
import styles from "./imageSearch.module.css";
import SearchField from "./searchField";
import SearchResult from "./searchResult";
import { useEffect, useState } from "react";

const ImageSearch = () => {

    const searchParams = useSearchParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        fetch('/api/images?searchterm=' + params.get('searchterm'))
        .then(res => res.json())
        .then(data => {

            setResult(data[0]);

        })
        
    }, [searchParams])
    

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <SearchField></SearchField>
            </div>

            <div className={styles.card}>
                <SearchResult results={result}></SearchResult>
            </div>
        </div>
    )
}

export default ImageSearch;