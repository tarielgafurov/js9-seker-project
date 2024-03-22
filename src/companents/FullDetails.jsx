
import React from 'react'


import Image1 from '../layout/image 10.png'; 
import Image2 from '../layout/image 110.png'; 
import Image3 from '../layout/image 112.png'; 
import Image4 from '../layout/image 113.png'; 
import Image5 from '../layout/Vector.png'; 
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../reducers/CounterSlice';


const images = [Image1, Image2, Image3,Image4,Image5]; 


const FullDetails = () => {

  const {counter}= useSelector((prevState)=>prevState.counter)
  console.log(counter);
  const dispatch = useDispatch()

  const plus =()=> {
      dispatch(counterSlice.actions.counterPlus())
  }
  return (
    <div>
    <StyleGloball>

      <ImgStyle>
      <div>
      <img src={images[0]} alt="" />
      </div>
      </ImgStyle>
      <GlobalStyle>

        <StyleApple>
         <h1>Apple Iphone 15 Pro</h1>
         <img src={images[4]} alt="" />
        </StyleApple>
        <h4 style={{color:"#878787",fontSize:"24px"}}>256Gb</h4>
        <h1 style={{color:"#9292EF"}}>116 000 сом</h1>
        <StyleColors>
        <h3>Цвет :</h3>
        <StyleDiv>
           <div style={{background: "#97938E"}}></div>
           <div style={{background:"#000000"}}></div>
           <div style={{background:"#0029FF"}}></div>
        </StyleDiv>
        </StyleColors>
        <StyleCounter>
        <h3>Количество :</h3>
        <button>🗑</button>
        <h2>{counter}</h2>
        <button onClick={plus}>+</button>
        </StyleCounter>
      </GlobalStyle>
    </StyleGloball>
       
      <StyleButton>
        <div>
          <img src={images[1]} alt="" />
        </div>
        <div>
          <img src={images[2]} alt="" />
        </div>
        <div>
          <img src={images[3]} alt="" />
        </div>
      <>
      <button style={{backgroundColor:"#9292EF", color:"#FFFFFF",border:"2px solid #9292EF", width:"230px"}}>В корзину</button>
      <button style={{border:"2px solid #9292EF",color:"#9292EF",width:"230px"}}>Купить сейчас</button>
      </>
      </StyleButton>
    </div>
  )
}

export default FullDetails

const StyleGloball = styled.div`
  display: flex;
`


const GlobalStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`
const StyleApple = styled.div`
width: 550px;
  display: flex;
  align-items: center;
  img{
    width: 30px;
    height: 23px;
    margin-left: 150px;
  }
`

const ImgStyle = styled.div`
width: 530px;
height: 450px;
background-color: #E7E0D6;
border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
  img{
    width: 400px;
    height: 400px;
  }
  `

const StyleColors = styled.div`
 
  width: 700px;
  div{
    border-radius: 100px;
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
  `
  const StyleDiv = styled.p`
    display: flex;
    justify-content: space-between;
    width: 110px;
  `
const StyleCounter = styled.div`
display: flex;
width: 400px;
align-items: center;
h2{
   margin-left: 10px;
}
    button{
      background-color: #9292EF;
      width: 29px;
      height: 29px;
      border: 2px solid;
      font-size: 18px;
      color:#ffffff;
      border-radius: 5px;
      margin-left: 15px;
    }

  `

  const StyleButton = styled.div`
    width: 1050px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      width: 130px;
      height: 102px;
      background-color: #E7E0D6;
      border-radius: 10px;
      margin-top:20px;
      margin-left: 30px;
    }
    img{
      margin-top: 20px;
      margin-left: 35px; 
    }
    button{
      width: 200px;
      height: 55px;
      border-radius: 10px;
      opacity: 0px;
      font-size: 20px;
    }
  `

