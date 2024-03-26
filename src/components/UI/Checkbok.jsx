import React, { useState } from 'react'
import { styled } from 'styled-components'
import Input from './Input'

const Checkbok = (props) => {
    const [checkbox, setCheckbox] = useState(false)

    const inputChange = ()=>{
        setCheckbox(!checkbox)
        console.log(checkbox); 
    }
    // setCheckbox(true)
  return (
    <ContainerInputStyled>
        <DivH3Styled>
            <h3>Цвет</h3>
        </DivH3Styled>
             <InputStyled>
                <InputCheckboxStyled>
                <Input  onChange={inputChange} type="checkbox" checked={checkbox} />
                <b>Красный</b>
                <div style={{background: "red"}}></div>
                </InputCheckboxStyled>
                <InputCheckboxStyled>
                <Input onChange={inputChange} type="checkbox" checked={checkbox} />
                <b>Черный</b>
                <div style={{background: "black"}}></div>
                </InputCheckboxStyled>
                <InputCheckboxStyled>
                <Input onChange={inputChange} type="checkbox" checked={checkbox} />
                <b>Белый</b>
                <div style={{border: "1px solid"}}></div>
                </InputCheckboxStyled>
                <InputCheckboxStyled>
                <Input onChange={inputChange} type="checkbox"checked={checkbox} />
                <b>Синий</b>
                <div style={{background:"#0004ff"}}></div>
                </InputCheckboxStyled>
                <InputCheckboxStyled>
                <Input onChange={inputChange} type="checkbox" checked={checkbox} />
                <b>Голубой</b>
                <div style={{background: "#00d9ff"}}></div>
                </InputCheckboxStyled>
                <InputCheckboxStyled>
                <Input onChange={inputChange} type="checkbox" checked={checkbox}/>
                <b>Розовый</b>
                <div style={{background:"#f700ff"}}></div>
                </InputCheckboxStyled>
             </InputStyled>
    </ContainerInputStyled>
  )
}

export default Checkbok

const ContainerInputStyled = styled.div`
    border: 1px solid;
    border: none;
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 2px 3px 3px #666666;
    width: 285px;
    height: 252px;
`

const DivH3Styled = styled.div`
    h3{
        border: 1px solid;
        width: 50px;
        height: 23px;
        margin-top: 10px;
        margin-left: 10px;
        border: none;
    }
`

const InputStyled = styled.div`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    border: none;
    `

const InputCheckboxStyled = styled.div`
    border: 1px solid;
    border: none;
    padding: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    
    b{
        font-size: 16px;
        margin-left: 20px;
        margin-top: 50+px;
    }
    input{
        width: 20px; 
        height: 20px;
        position: relative;
        top: -10px;

    }
    div{
        border: 1px solid;
        border: none;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-top: 5px;
        margin-left: 10px;
    }
`

