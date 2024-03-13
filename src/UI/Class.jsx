
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const Class = () => {
    const [Like,setLike] = useState(false);

    const Click = () => {
        setLike(!Like);
    };
  return (
        <Button onClick={Click}> {Like ? '❤️' : '🤍'} </Button> 
  )
}

export default Class

const Button = styled.div`
display: flex;
display: inline-block;
cursor: pointer;
font-size: 30px;
`
