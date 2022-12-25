import { ScreenContainer, Form, TitleInput, InputContainer, ButtonEnter } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useContext, useState } from "react"
import axios from "axios"
import AuthContext from "../../contexts/AuthContext"


export default function Login() {

    const navigate = useNavigate()
    const { setAuth } = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '',
        password: ''
      })

    function validation(event) {
        event.preventDefault()

        const baseUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"

        const promise = axios.post(baseUrl, form)

        promise.then(res => {
            setAuth(res.data.token)
            localStorage.setItem('token', res.data.token)
            {
                if(res.data.menbership == null){
                    navigate("/subscription")
                }else{
                    navigate("/home")
                }
            }
        })

        promise.catch(err => {
            alert(`[ERRO] ${err.response.data.message}`)
        })
    }

    function handleForm(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
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
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="password"></TitleInput>
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={form.senha}
                        onChange={handleForm}
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

