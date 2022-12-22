import { ScreenContainer, Form, InputContainer, TitleInput, ButtonEnter } from "./StyledSignup"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    return (
        <ScreenContainer>
            <Form>
                <InputContainer>
                    <TitleInput htmlFor="name"></TitleInput>
                    <input type="text" placeholder="Nome" id="name" required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="cpf"></TitleInput>
                    <input type="number" placeholder="CPF" id="cpf" required />
                </InputContainer>

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
            <Link to="/">
                <span>Já possui uma conta? Entre</span>
            </Link>
        </ScreenContainer>
    )
}