import React from 'react'
import styled from 'styled-components'
import image1 from '../layout/img2.png'

const Input = (props) => {
  return (
    <Input1>
    <div>
      <input type="text" placeholder='Что вы ищете...?'/>
    </div>
    {props.search && <InputDiv>
        <div>
        <img src={image1} alt="" />
        </div>
    </InputDiv>}
     
    </Input1>
  )
}

export default Input
const Input1 = styled.div`
width: 468px;
height: 40px;
display: flex;
justify-content: center;
border-radius: 10px;

background-color: #F4F4F4;
input{
width: 390px;
background-color: #F4F4F4;
padding-left:20px;
font-size: 15
px;
height: 40px;
outline: none;
border-radius: 10px;
border: none;
}
div{
display: flex;
flex-direction: column;

}
`
const InputDiv = styled.div`
width: 52.34px;
height: 40px;
border-radius: 0px 10px 10px 0px;
background-color: #9292EF;
display: flex;
align-items: center;
justify-content: center;
div{
img{
    width: 20.53px;
    height: 19.38px;
    cursor: pointer;
}
}
`

