import React from 'react'
import ImgContact from '../layout/Vector.png'
import ImgLike from '../layout/Vector (7).png'
import ImgBasket from '../layout/Vector (8).png'
import ImgLine from '../layout/Rectangle 2 (1).png'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
      <ContainerSeker>
        <img src={ImgLine} alt="" />
        <DivSekerStyled>
        <h3>Seker</h3>
        <p>твой лучший выбор</p>
        </DivSekerStyled>
        <input type="text" /><br />
        <DivIconkaStyled>
          <ContactDiv>
           <img src={ImgContact} alt="" />
          <Link to={'User'}><p>Войти</p></Link>  
          </ContactDiv>
          <LikeDiv>
            <img src={ImgLike} alt="" />
            <p>Закладки</p>
          </LikeDiv>
          <BasketDiv>
            <img src={ImgBasket} alt="" />
            <p>Корзина</p>
          </BasketDiv>
        </DivIconkaStyled>
      </ContainerSeker>
  )
}

export default Header

const ContainerSeker = styled.div`
  border: 2px solid;
  display: flex;
  justify-content: space-between;
  width: 1170px;
  height: 56px;


  input {
    width: 468px;
    height: 40px;
    top: 9px;
    left: 292.5px;
    gap: 0px;
    border-radius: 10px 0px 0px 0px;
    opacity: 0px;
    border: 2px solid;
    margin: auto;
  }
  
`
const DivSekerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 3px;
  height: 58px;
 
  h3 {
    margin: 0;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
  }
`

const DivIconkaStyled = styled.div`
  display: flex;
  width: 330px;
  height: 60px;
  justify-content: space-between;
`

const ContactDiv = styled.div`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  

  img {
    width: 25.66px;
    height: 24.23px;
    margin-top: 10px;
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`

const LikeDiv = styled.div`
  width: 100px;
  height: 25.5px;
  display: flex;
  justify-content: space-around;
  

  img {
    width: 25.66px;
    height: 24.23px;
    margin-top: 10px;
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`

const BasketDiv = styled.div`
  width: 100px;
  height: 25.5px;
  display: flex;
  justify-content: space-around;
  

  img {
    width: 25.66px;
    height: 24.23px;
    margin-top: 10px;
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`