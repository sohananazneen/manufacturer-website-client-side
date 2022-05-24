import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/images/Banner/banner-1.jpg';
import banner2 from '../../assets/images/Banner/banner-2.jpg';
import banner3 from '../../assets/images/Banner/banner-3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>Premium Quality Products Manufacturers</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>High Quality The Parts Of Shock Absorbers Assembly</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Brings you only the best quality Products</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;