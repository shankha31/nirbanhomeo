import React from "react";
import Dp from './Files/Herbal medicine with leaf logo.png'
import ImageSlider from "../src ImageSlider/ImageSlider";
import NavBar from "../navbar/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="HomeParent">
                <div className="HomeSubParent">

                    <div className="imageCard">
                        <img src={Dp} alt='DisplayPicture' className="displayImage" />
                        <div className="DisplayNameContainer">
                            <h3>NIRBAN HANNY</h3>
                            <h3 style={{textAlign: 'center'}}>HOMEOPATHY</h3>
                        </div>
                    </div>
                    <div className="imageSliderCard">
                        <ImageSlider />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;