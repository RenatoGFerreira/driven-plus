import styled from "styled-components"

export const ScreenContainer = styled.div`
    background-color: #000;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
        color: #fff;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        margin: 70px 0 40px 0;
    }
`

export const Cards = styled.div`
    border: 3px solid #7e7e7e;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px 30px;
    margin-bottom: 20px;
    img{
        width: 140px;
        height: 96px;
    }
    span{
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
        font-style: normal;
    }
`