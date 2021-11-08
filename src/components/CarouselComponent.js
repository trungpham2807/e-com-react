import React from 'react'
import "../pages/HomePage.css"
import {Carousel} from "react-bootstrap"
const CarouselComponent = () => {
    return (
        <div className = "home-carousel">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="./carousel_3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="./carousel_1.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="./carousel_2.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>               
        </div>
    )
}

export default CarouselComponent
         {/* <img className="home-carousel_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}