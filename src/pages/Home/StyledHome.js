import styled from "styled-components"

export const ScreenContainer = styled.div`
background-color: #000;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
h1{
    color: #fff;
}
`

export const HeaderContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`
export const ButtonsContainerCenter = styled.div`
    display: flex;
    flex-direction: column;

`
export const ButtonsContainerFooter = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;

`
export const ButtonChangePlan = styled.button`
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    width: 299px;
    height: 52px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
`
export const ButtonCancelPlan = styled.button`
    background-color: #FF4747;
    color: #fff;
    border-radius: 8px;
    width: 299px;
    height: 52px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
`