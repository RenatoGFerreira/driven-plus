import { useContext } from "react"
import styled from "styled-components"
import imagem from "../../assets/plan_one.png"
import profile from "../../assets/profile.png"
import AuthContext from "../../contexts/AuthContext"

export default function Header(){

    const contexto = useContext(AuthContext)
    return(
        <ScreenContainer>
            <TopoContainer>
                <LogoContainer>
                    <img src={imagem} alt="Plano Basics"/>
                </LogoContainer>
                <ProfileContainer>
                    <img src={contexto} alt="ProfilePicture"/>
                </ProfileContainer>
            </TopoContainer>
            <TituloContainer>
                <h1>Olá, Fulano</h1>
            </TituloContainer>
        </ScreenContainer>
    )

}

export const ScreenContainer = styled.div`
height: 110px;
`
export const TopoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 18px 20px 15px 20px;
`
export const LogoContainer = styled.div`
img{
    width: 74px;
}
`
export const ProfileContainer = styled.div`
img{
    width: 34px;
    height: 34px;
    border-radius: 100px;
}
`
export const TituloContainer = styled.div`
display: flex;
justify-content: center;
h1{
    font-size: 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-style: normal;
    line-height: 28px;
}
`

