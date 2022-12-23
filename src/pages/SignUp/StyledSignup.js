import styled from "styled-components";

export const ScreenContainer = styled.div`
    background: #000;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        color: #fff;
        font-size: 14px;
        text-decoration: underline;
    }
    a{
        margin-top: 14px;
    }
`

export const Form = styled.form`
    border: none;
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
            padding-left: 15px;
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