import React, { useEffect, useState } from "react";
import "./style.css";
import data from './data';

const ImageSlider = () => {
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
        let incr = setInterval(() => {
            setCurrImage((currImage+1) % data.length);
        }, 3000)

        return () => clearInterval(incr);
    }, [currImage])

    return (
        <>
            <div className="imageContainer">

                <img src={data[currImage].url} alt='dummy' className="image" />

                <div className="imageIconContainer">

                    {data.map((currentItem, Idx) => {
                        return (
                            <div className="imageIconButtonOuter"> 
                                <div className={`imageIconButton ${currImage===Idx? 'show':''}`} />
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}

export default ImageSlider;