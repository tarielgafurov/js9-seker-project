import React, { useState } from 'react'
import { styled } from 'styled-components';

const Select = () => {
    const [selectOption, setSelectOption] = useState([])

    const handleChange = (e)=>{
        const test = e.target.value
        setSelectOption(prevOption => [...prevOption, test]);
    }
  return (
    <div>
    <ContainerSelectStyled>
        <select onChange={handleChange}>
            <option value="">Цена</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
    </ContainerSelectStyled>
        {
            selectOption.map((el, index)=>{
                return <h1 key={index}>{el}</h1>
            })
          }
    </div>

  )
}

export default Select


const ContainerSelectStyled = styled.div`
    border: 1px solid;
    width: 107px;
    height: 35px;
    border: none;
    select{
        border: 1px solid;
        background-color: #FC3A74;
        width: 107px;
        height: 35px;
        font-size: 16px;
        border-radius: 10px;
        border: none;
        color: #FFFFFF;       
    }
    option{
        text-align: center;
        border: none;
    }
`



