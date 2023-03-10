import { ScreenContainer, HeaderContainer, LogoContainer, 
BenefitsContainer, PriceContainer, TituloContainer, BodyContainer, 
Form, InputContainer, TitleInput, ButtonEnter, GrouopCard, ConfirmContainer, 
Confirm, ContainerButtons, ContainerIMG, ButtonConfirm, 
ButtonCancel, ContainerText } from "./StyledInfoPlan";

import sheet from "../../assets/sheet.png"
import money from "../../assets/money.png"
import closeButton from "../../assets/close.png"
import goBack from "../../assets/goBack.png"
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import AuthContext from "../../contexts/AuthContext"
import PlanContext from "../../contexts/PlanContext";

export default function InfoPlan() {
    const [plan, setPlan] = useState([])
    const { idplan } = useParams()
    const { auth } = React.useContext(AuthContext)
    const idPlan = Number(useParams().idPlan)
    const [form, setForm] = useState({
        menbershipId: Number(idPlan),
        cardName: "",
        cardNumber: "",
        securityNumber: Number(""),
        expirationDate: ""
    })
    const [confirmWindow, setConfirmWindow] = useState(false)
    const { setPlanUser } = React.useContext(PlanContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth === null) {
            navigate('/subscription')
          }
        const config = { headers: { Authorization: `Bearer ${auth}` } }
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idplan}`, config)
        promise.then(res => {
            form.menbershipId = idPlan
            setForm({ ...form})
            setPlan(res.data)
        })
        promise.catch(err => console.log(err.response.data.message))
    }, [])

    function paynmentConfirm(e) {
        e.preventDefault()
        setConfirmWindow(true)
    }

    function handleForm(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    function sendForm() {
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
                form, { headers: { Authorization: `Bearer ${auth}` } })
            promise.then(res => {
                localStorage.setItem('token', JSON.stringify(auth))
                setPlanUser(res.data)
                console.log(res.data)
                navigate('/home')
            })
            promise.catch(res => {
                alert(res.response.data.message)
                console.log(res.response.data)
            })
    }

    return (
        <ScreenContainer>
            <HeaderContainer>
                <Link to={"/subscription"}>
                    <img src={goBack} alt="voltar" />
                </Link>
            </HeaderContainer>
            <LogoContainer>
                <img src={plan.image} alt="Plano Escolhido" />
                <h1>{plan.name}</h1>
            </LogoContainer>
            <BenefitsContainer>
                <TituloContainer>
                    <img src={sheet} alt="Folha de Papel" /> <h1>Beneficios:</h1>
                </TituloContainer>
                <BodyContainer>
                    {/* {plan.perk.map((benef, index) => (<p key={index}>{benef.title}</p>))} */}
                    <p>1. Brindes Exclusivos</p>
                    <p>2. Materiais b??nus de web</p>
                </BodyContainer>
            </BenefitsContainer>
            <PriceContainer>
                <TituloContainer>
                    <img src={money} alt="Folha de Papel" /> <h1>Pre??o:</h1>
                </TituloContainer>
                <BodyContainer>
                    <p>R$ {plan.price} cobrados mensalmente</p>
                </BodyContainer>
            </PriceContainer>

            <Form onSubmit={paynmentConfirm}>
                <InputContainer>
                    <TitleInput htmlFor="cardName"></TitleInput>
                    <input
                        type="text"
                        placeholder="Nome impresso no cart??o"
                        name="cardName"
                        value={form.cardName}
                        onChange={handleForm}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="cardNumber"></TitleInput>
                    <input
                        type="number"
                        placeholder="Digitos do cart??o"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleForm}
                        required
                    />
                </InputContainer>

                <GrouopCard>
                    <InputContainer>
                        <TitleInput htmlFor="securityNumber"></TitleInput>
                        <input
                            type="number"
                            placeholder="C??digo de seguran??a"
                            name="securityNumber"
                            value={Number(form.securityNumber)}
                            onChange={handleForm}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <TitleInput htmlFor="expirationDate"></TitleInput>
                        <input
                            type="month"
                            placeholder="Validade"
                            name="expirationDate"
                            value={form.expirationDate}
                            onChange={handleForm}
                            required
                        />
                    </InputContainer>
                </GrouopCard>
                <InputContainer>
                    <ButtonEnter>Assinar</ButtonEnter>
                </InputContainer>
            </Form>
            {confirmWindow ?
                <ConfirmContainer>
                    <Confirm>
                        <ContainerIMG>
                            <img src={closeButton} alt="close" onClick={() => setConfirmWindow(false)} />
                        </ContainerIMG>
                        <ContainerText>
                            <span>Tem certeza que deseja assinar o plano {plan.name} (R$ {plan.price})?</span>
                        </ContainerText>
                        <ContainerButtons>
                            <ButtonConfirm onClick={() => setConfirmWindow(false)}>
                                N??o
                            </ButtonConfirm>
                            <ButtonCancel onClick={sendForm} >
                                Sim
                            </ButtonCancel>
                        </ContainerButtons>
                    </Confirm>
                </ConfirmContainer>
                : ""}

        </ScreenContainer>
    )
}