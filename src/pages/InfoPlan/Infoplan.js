import { ScreenContainer, HeaderContainer, LogoContainer, BenefitsContainer, PriceContainer, TituloContainer, BodyContainer, Form, InputContainer, TitleInput, ButtonEnter, GrouopCard, ConfirmContainer, Confirm, ContainerButtons  } from "./StyledInfoPlan";
import sheet from "../../assets/sheet.png"
import money from "../../assets/money.png"
import goBack from "../../assets/goBack.png"
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function InfoPlan() {
    const [plan, setPlan] = useState([])
    const { idplan } = useParams()
    const { auth } = useContext(AuthContext)
    const [form, setForm] = useState({
        menbershipId: "",
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationNumber: "",
        expirationDate: ""
    })

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idplan}`,
            {
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            })
        promise.then(res => {
            setForm({ ...form, "menbershipId": res.data.id })
            console.log(res.data)
            setPlan(res.data)
        })
        promise.catch(err => console.log(err.response.data.message))
    }, [])

    function paynmentConfirm() {
        alert("Confirmar pamento?")
    }

    function handleForm(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
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
                    <p>2. Materiais bônus de web</p>
                </BodyContainer>
            </BenefitsContainer>
            <PriceContainer>
                <TituloContainer>
                    <img src={money} alt="Folha de Papel" /> <h1>Preço:</h1>
                </TituloContainer>
                <BodyContainer>
                    <p>R$ {plan.price} cobrados mensalmente</p>
                </BodyContainer>
            </PriceContainer>

            <Form onSubmit={paynmentConfirm}>
                <InputContainer>
                    <TitleInput htmlFor="nameCard"></TitleInput>
                    <input
                        type="text"
                        placeholder="Nome impresso no cartão"
                        name="nameCard"
                        value={form.cardName}
                        onChange={handleForm}
                        required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="digitsCard"></TitleInput>
                    <input
                        type="number"
                        placeholder="Digitos do cartão"
                        id="digitsCard"
                        value={form.cardNumber}
                        onChange={handleForm}
                        required />
                </InputContainer>

                <GrouopCard>
                    <InputContainer>
                        <TitleInput htmlFor="securityCode"></TitleInput>
                        <input
                            type="number"
                            placeholder="Código de segurança"
                            id="securityCode"
                            value={form.securityNumber}
                            onChange={handleForm}
                            required />
                    </InputContainer>

                    <InputContainer>
                        <TitleInput htmlFor="validity"></TitleInput>
                        <input
                            type="number"
                            placeholder="Validade"
                            id="validity"
                            value={form.expirationDate}
                            onChange={handleForm}
                            required />
                    </InputContainer>
                </GrouopCard>
                <InputContainer>
                    <ButtonEnter>Assinar</ButtonEnter>
                </InputContainer>
            </Form>
            {/* <ConfirmContainer>
                <Confirm>
                    <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39.99)?</p>
                    <ContainerButtons>
                            x
                    </ContainerButtons>
                </Confirm>
            </ConfirmContainer> */}
        </ScreenContainer>
    )
}