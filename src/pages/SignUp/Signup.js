import { ScreenContainer, Form, InputContainer, TitleInput, ButtonEnter } from "./StyledSignup"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Signup() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function register(event){
        event.preventDefault()

        const urlSignup = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up"
        const cadastroDrivenPlus = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }

        console.log(cadastroDrivenPlus)

        const promise = axios.post(urlSignup, cadastroDrivenPlus)
        promise.then( res => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch(
            err => {
                console.log(err.response.data)
                alert(`[ERRO] ${err.response.data.message}`)
            }
            
        )
        setCpf("")
        setEmail("")
        setName("")
        setPassword("")
    }

    return (
        <ScreenContainer>
            <Form onSubmit={register}>
                <InputContainer>
                    <TitleInput htmlFor="name"></TitleInput>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    id="name" 
                    value = {name}
                    onChange={e => setName(e.target.value)}
                    required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="cpf"></TitleInput>
                    <input 
                    type="number" 
                    placeholder="CPF" 
                    id="cpf" 
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required />
                </InputContainer>

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
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required />
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