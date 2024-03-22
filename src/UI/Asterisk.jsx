

import React, { useState } from 'react'
import Asteriskk from '../layout/asterisk.png'
import styled from 'styled-components'

const Asterisk = () => {

  const [AsteriskImage,setAsteriskImage] = useState(false)
  console.log(AsteriskImage);

  const ClickHandle = () => {
    setAsteriskImage(!AsteriskImage)
  }
  return (
    <Asterisk1>
        <img src="https://us.123rf.com/450wm/tanyastock/tanyastock1507/tanyastock150700743/43046264-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B2-%D0%B8%D0%B7%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%8F-%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0%D0%B1%D1%80%D0%BE%D1%81%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg" alt="" />
        <img  src={Asteriskk} alt="" />
        <button onClick={ClickHandle}>{AsteriskImage? Asteriskk : '★'}</button> 
    </Asterisk1>
  )
}

export default Asterisk

const Asterisk1 = styled.div`

border: 12px solid yellow;
width: 100px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;

img{
  border: 2px solid blue;
  width: 50px;
  height: 20px;
  display: flex;
  display: none;

}
`

