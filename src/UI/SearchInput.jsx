import React from 'react'
import img1 from '../layout/img1.png'
import img2 from '../layout/img2.png'

const SearchInput = () => {

    const input = (e) => {
        console.log(e.target.value);
    }
  return (
    <Input>
      <input onChange={input} placeholder='Что вы ищете...?' type="serach" />
      <button>
        <img className='img1' src={img1} alt="" />
        <img className='img2' src={img2} alt="" />
      </button>
    </Input>
  )
}

export default SearchInput

const Input = styled.div`
width: 468px;
height: 40px;
top: 9px;
left: 292.5px;
    input{
        width: 95%;
        height: 50px;
        display: flex;
        border: radi;
        background-color:#F4F4F4;
        padding-left: 20px;
        border-radius:10px;
        font-size: 18px;
    }

    .img1{
        width: 70px;
        height: 51px;
        border-radius: 1px;
        display: flex;
        position: relative;
        bottom: 3px;
        right: 10px;
        cursor: pointer;
    }

    .img2{
        width: 30px;
        height: 35px;
        position: absolute;
        bottom: 0px;
        top: 6px;
        right: 6px;
        cursor: pointer;
    }
    button{
        position: absolute;
        width: 52.34px;
        height: 40px;
        left: 380px;
        bottom: 583px;
        border-radius: 0px, 10px, 10px, 0px;
    }
`
