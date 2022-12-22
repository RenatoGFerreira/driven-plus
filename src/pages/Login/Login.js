import { ScreenContainer, Form, TitleInput, InputContainer, ButtonEnter } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../Assets/logo.png"


export default function Login() {

    return (
        <ScreenContainer>
            <img src={Logo} alt="logo" />
            <Form>
                <InputContainer>
                    <TitleInput htmlFor="email"></TitleInput>
                    <input type="email" placeholder="E-mail" id="email" required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="password"></TitleInput>
                    <input type="password" placeholder="Senha" id="password" required />
                </InputContainer>

                <InputContainer>
                    <ButtonEnter>Entrar</ButtonEnter>
                </InputContainer>
            </Form>
            <Link to="/sign-up">
                <span>Não Possui uma conta? Cadastre-se</span>
            </Link>
        </ScreenContainer>
    )
}



{/* <Form>
                <InputContainer>
                    <TitleInput htmlFor="email"></TitleInput>
                    <input type="email" placeholder="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </InputContainer> */}