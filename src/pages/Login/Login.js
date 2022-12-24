import { ScreenContainer, Form, TitleInput, InputContainer, ButtonEnter } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useContext, useState } from "react"
import axios from "axios"
import AuthContext from "../../contexts/AuthContext"


export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)

    function validation(event) {
        event.preventDefault()

        const baseUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"

        const baseLogin = {
            email: email,
            password: senha
        }

        const promise = axios.post(baseUrl, baseLogin)

        promise.then(res => {
            const newUser = res.data
            setUser(newUser)
            navigate("/subscription")
        })

        promise.catch(err => {
            alert(`[ERRO] ${err.response.data.message}`)
        })

        setEmail("")
        setSenha("")
    }

    return (
        <ScreenContainer>
            <img src={Logo} alt="logo" />

            <Form onSubmit={validation}>
                <InputContainer>
                    <TitleInput htmlFor="email"></TitleInput>
                    <input
                        type="email"
                        placeholder="E-mail"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="password"></TitleInput>
                    <input
                        type="password"
                        placeholder="Senha"
                        id="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required />
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

