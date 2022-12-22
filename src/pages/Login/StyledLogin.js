import styled from "styled-components";


export const ScreenContainer = styled.div`
width: 100vw;
height: 100vh;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
background-color: #000;

img{
    margin-top: 45%;
}
form{
    width: 80%;

    input{
        width: 100%;
        border: 1px solid #d4d4d4;
        background-color: #fff;
        color: #afafaf;
        height: 45px;
        font-size: 19px;
        ::placeholder{
            color: #DBDBDB;
            padding-left: 15px;
        }
    }
}
`

export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TitleInput = styled.label`
width: 100%;
`

export const InputContainer = styled.div`
width: 100%;
margin-top: 10px ;
`

export const SaveButton = styled.button`
width: 100%;
height: 45px;
margin-top: 15px;
margin-bottom: 15px;
background-color: #FF4791;
border-style: none;
color: #fff;
font-size: 19px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

img{
    position: relative;
    top: 0;
    margin-bottom: 130px;
    width: 90px;
    height: 30px;
}


`