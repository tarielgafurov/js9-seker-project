import React from 'react'
import styled from 'styled-components'
import VisaImg from '../layout/Group 314.png'
import VisaImg1 from '../layout/Vector (1).png'
import WhatsappImg from '../layout/Vector (3).png'
import InstagramImg from '../layout/Vector (5).png'
import TelegramImg from '../layout/Vector (6).png'


const Footer = () => {
  return (
    <div>
         <FooterStyled>
          <DivStyled>
            <h3>Покупателям</h3>
            <FontStyled>
             <p>О нас</p>
             <p>Оплата</p>
             <p>Доставка</p>
             <p>Магазины</p>
            </FontStyled>
          </DivStyled>
          <DivModeStyled>
            <h3>Режим работы</h3>
            <FontStyled>
            <p>Ежедневно с 9:00 до 21:00</p>
            <p>Отдель продаж</p>
            <p>Будни с 9:00 до 21:00</p>
            <p>Доставка и сборка</p>
            </FontStyled>
          </DivModeStyled>
          <DivNumberStyled>
            <h3>Связаться с нами</h3>
            <FontStyled>
            <p>+996 708 112 610</p>
            <p>+996 773 838 618</p>
            <p>comfort.kg@gmail.com</p>
            <h3>Мы в соц. сетях</h3>
            <IconkaImg>
            <img src={WhatsappImg} alt="" />
            <img src={InstagramImg} alt="" />
            <img src={TelegramImg} alt="" />
            </IconkaImg>
            </FontStyled>
          </DivNumberStyled>
          <DivPaymentStyled>
            <h3>Способ оплаты</h3>
            <FontStyled>
            <p><img src={VisaImg1} alt="" /> <img src={VisaImg} alt="" /></p>
            <p>Наличным в любом пункте самовывоза или картой</p>
            <p>© Comfort. 2022</p>
            </FontStyled>
          </DivPaymentStyled>
         </FooterStyled>
      </div>
  )
}

export default Footer

const FooterStyled = styled.div`
  width: 1440px;
  height: 387px;
  border-radius: 10px;  
  display: flex;
  justify-content: space-around;
  color: white;
  background-color:#9292EF;
  padding-top: 70px;
border-radius: 10px 0px 0px 0px;
opacity: 0px;

`
 
const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  h3{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  p{
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

`
const FontStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const DivModeStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 242px;

  h3{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  
  p{
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`
 
const IconkaImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 149.55px;
`

const DivNumberStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 236.35px;
   
  h3{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  
  p{
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

`

const DivPaymentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 172.59px;
  height: 178px;
  
  h3{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  

  p{
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

  img{
    margin: 0;
    padding: 5px;
  }
  }
`