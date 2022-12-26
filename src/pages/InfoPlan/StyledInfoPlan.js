import styled from "styled-components";

export const ScreenContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
`
export const HeaderContainer = styled.div`
    display: block;
    padding: 15px 12px;
    img{
        width: 31px;
    }
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin: 15px;
        width: 130px;
        height: 99px;
    }
    h1{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        line-height: 37.5px;
    }
`
export const BenefitsContainer = styled.div`
    margin: 10px 0;
    width: 90%;
    align-self: center;
`
export const PriceContainer = styled.div`
    margin: 10px 0;
    width: 90%;
    align-self: center;
`
export const TituloContainer = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    h1{
        margin-left: 5px;
    }
`
export const BodyContainer = styled.div`
    font-size: 14px;
`
export const Form = styled.form`

    margin-top: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
export const TitleInput = styled.label`
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: center;

    input{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
        font-weight: 700;
        ::placeholder{
            color: #7E7E7E;
            padding-left: 4px;
            font-size: 12px;
        }
    }
`
export const ButtonEnter = styled.button`
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    width: 299px;
    height: 52px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;

`
export const GrouopCard = styled.div`
    width: 80%;
    align-self: center;
    display: flex;
    input{
        width: 100%;
    }

`

export const ConfirmContainer = styled.div`
position: absolute;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, .5);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Confirm = styled.div`
border-radius: 12px;
background-color: #fff;
width: 80%;
height: 20%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const ContainerText = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

span{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
}
`
export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const ButtonCancel = styled.button`
width: 95px;
height: 52px;
border-radius: 12px;
margin: 10px;
background-color: #FF4791;
color: #fff;
border: none;
`

export const ButtonConfirm = styled.button`
width: 95px;
height: 52px;
border-radius: 12px;
margin: 10px;
background-color: #cecece;
color: #fff;
border: none;
`

export const ContainerIMG = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
img{
    margin-top: 7px;
    margin-right: 7px;
    background-color: #000;
}

`