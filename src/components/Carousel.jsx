import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/1f25201ced5d720d.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/cc633426b89ad841.png?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/a859e5c525a11ef9.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/f241e768f8367561.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20"
    ];

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Container>
            <StyledSlider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </StyledSlider>
        </Container>
    );
};

export default Carousel;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #fff;
 
  padding: 0;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0;
  }
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
   
  
`;
