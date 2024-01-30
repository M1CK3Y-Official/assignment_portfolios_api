'use client';

import Image from "next/image";
import styles from './galleryImages.module.css';
import { useEffect, useState, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


const GalleryImages = ({gallery}) => {

    const [data, setData] = useState([]); 

    const swiperRef = useRef(null);
    useEffect(() => {
        console.log('swiper registered');
        register();

    }, []);



    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:3000/api/images?gallery=${gallery}`);

            const result = await response.json();

            setData(result);

        }

        fetchData();

    }, [gallery]);


    return (
        <div className={styles.slider}>
            <swiper-container height="100%" autoplay-delay="5000" rewind="true"  loop="true"  slides-per-view="1" keyboard="true" speed="500" space-between="25" >
            {data.map((data, index) => (
                <swiper-slide className={styles.slide} key={index}>
                    <Image className={styles.image} src={data.path} alt={'eh'} width={data.width} height={data.height} />
                    <div className={styles.text}>
                        <p>{data.author}</p>
                        <p>{data.gallery}</p>
                    </div>
                </swiper-slide>
                ))}
            </swiper-container>
        </div>
    )

}

export default GalleryImages;