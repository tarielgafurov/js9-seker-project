import React, { useState } from 'react'
import { styled } from 'styled-components';

const Select = () => {
    const [selectOption, setSelectOption] = useState([])

    const handleChange = (e)=>{
        const test = e.target.value
        console.log(test);
        setSelectOption(prevOption => [...prevOption, test]);
    }

  return (
    <div>
    <ContainerSelectStyled>
        <select onChange={handleChange}>
            <option value="">Цена</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
        </select>
    </ContainerSelectStyled>
        {/* <h1>{selectOption}</h1> */}
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



