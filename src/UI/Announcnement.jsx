import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from '../layout/21438 1 (1).png'; 
import Image2 from '../layout/21438 1 (2).png'; 
import Image3 from '../layout/21438 1.png'; 

const images = [Image1, Image2, Image3]; 

const Announcement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div>
      <ImageStyled>
        <ImageTransition>
          <GlobalImage>
            <img src={images[(currentImageIndex + 1) % images.length]} alt="" />
            <img src={images[(currentImageIndex + 2) % images.length]} alt="" />
            <img src={images[(currentImageIndex ) % images.length]} alt="" />
          </GlobalImage>
           <PointStyle>
            <div></div>
            <div></div>
            <div></div>
           </PointStyle>
        </ImageTransition>
      </ImageStyled>
    </div>
  );
};

export default Announcement;

const ImageStyled = styled.div`
  width: 1440px;
  height: 2071px;
  margin: auto;
  position: relative;

  img {
    width: 600px;
    margin-top: 100px;
  }
`;

const GlobalImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 600px;
    height: 300px;
    position: absolute;
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  }
  `;

const ImageTransition = styled.div`
  width: 1350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  `;
const PointStyle = styled.div`
  display: flex;
  /* border: 1px solid; */
  margin-left: 650px;
  margin-top: 400px;

div{
  width: 5px;
  height: 5px;
  border: 1px solid red;
  border-radius: 100px;
  margin-left: 10px;
}
`
