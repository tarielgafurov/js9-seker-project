import React from 'react'
import { styled } from 'styled-components'
import Backdrop from './Backdrop';

const ModalModal = ({onClose, children,variantModal}) => {
    console.log(onClose);
    console.log(children);
    
  return (
    <>
        <Backdrop/>
    <ContainerModalStyled variantModal={variantModal}>
        <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/x_close_cross_delete_icon_159748.png" alt="" />
        <b variant>{children}</b>
        {!variantModal && <>
    <hr/>
    <ButtonStyled>
        <CancelButton onClick={onClose}>Cansel</CancelButton>
        <DeleteButton>Delete</DeleteButton>
    </ButtonStyled>
        </>}
    </ContainerModalStyled>
    </>
  )
}

export default ModalModal


const ContainerModalStyled = styled.div`
    border: 1px solid;
    display: inline-block;
    box-shadow: 1px 1px 2px 2px #4b4747;
    background-color: ${(props) => props.backgroundColor || "white"};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 14px;
    padding: ${(props) => props.variantModal === "standart" ? "34px 40px 36px 26px" : "14px 30px"};
    
   
    img{
        width: ${(props) => props.variantModal === "standart" ? "10px" : "20px"};
        position: absolute;
        right: 16px;
        top: ${(props) => props.variantModal === "standart" ? "14px" : ""};
        
    }
    b{
        font-size: ${(props) => props.variantModal === "standart" ? "30px" : "20px"};
    }
    hr{
        margin: 14px 0px;
        border: 0.5px solid  #b7b4b4;

    }
    
`

const ButtonStyled = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-around;
`

const CancelButton = styled.button`
    border: 1px solid;
    width: 140px;
    background-color: white;
    padding: 12px;
    border-radius: 8px;



`

const DeleteButton = styled.button`
   width: 140px;
   background-color: #ca0b0b;
   padding: 12px;
   border-radius: 8px;
   color: white;
   border: none;
    
`