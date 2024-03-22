import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import InputImage from '../layout/ri_image-add-fill.png'

const ImagePages = () => {
  const [img, setImg] = useState(null)
  const InputRef = useRef(null) 

  const ChangeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImg(imageUrl)
    }
  }

  const SelectInputClick = () => InputRef.current.click()

  const DeleteHandler = () => {
    setImg(null)
  }

  return (
    <ContainerDiv>
      <DivStyledInput>
        <ImgDivStyled>
          <img src="https://cdn-icons-png.flaticon.com/512/70/70757.png" alt="" onClick={DeleteHandler} />
          <img src="https://cdn-icons-png.flaticon.com/512/81/81948.png" alt="" onClick={SelectInputClick} />
        </ImgDivStyled>
        <InputStyled>
          <LabelStyled htmlFor="file-upload">{!img && <img src={InputImage} alt="" />}</LabelStyled>
          <Input ref={InputRef} id="file-upload" type="file" onChange={ChangeImage} />
        </InputStyled>
        {img && <ImageStyled src={img} alt="" />}
      </DivStyledInput>
    </ContainerDiv>
  )
}

export default ImagePages;


const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

const DivStyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 278px;
  height: 260px;
  background-color: #d9d9d9;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      display: block;
    }
  }
`

const InputStyled = styled.div`
  position: relative;
`

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;  
`

const LabelStyled = styled.label`
  cursor: pointer;
`

const ImageStyled = styled.img`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  object-fit: cover;
  border-radius: 15px;
  margin: 10px;
`

const ImgDivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 70px;
  position: absolute;
  top: 1px;
  margin-left: 248px;
  background-color: #c7c7c7b7;
  border-radius: 10px;

  img {
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    display: none;
  }
`


 