import { ScreenContainer, HeaderContainer, LogoContainer, BenefitsContainer, PriceContainer, TituloContainer, BodyContainer, Form, InputContainer, TitleInput, ButtonEnter, GrouopCard, ConfirmContainer, Confirm, ContainerButtons, ContainerIMG, ButtonConfirm, ButtonCancel, ContainerText } from "./StyledInfoPlan";
import sheet from "../../assets/sheet.png"
import money from "../../assets/money.png"
import closeButton from "../../assets/close.png"
import goBack from "../../assets/goBack.png"
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import loading from "../../assets/loading.gif"

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
    const [confirmWindow, setConfirmWindow] = useState(false)

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

    function paynmentConfirm(e) {
        e.preventDefault()
        setConfirmWindow(true)
    }

    function handleForm(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    if(plan.length === 0 ){
        return <ScreenContainer>{loading}</ScreenContainer>

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
                    // required 
                    />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="digitsCard"></TitleInput>
                    <input
                        type="number"
                        placeholder="Digitos do cartão"
                        id="digitsCard"
                        value={form.cardNumber}
                        onChange={handleForm}
                    // required 
                    />
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
                        // required 
                        />
                    </InputContainer>

                    <InputContainer>
                        <TitleInput htmlFor="validity"></TitleInput>
                        <input
                            type="number"
                            placeholder="Validade"
                            id="validity"
                            value={form.expirationDate}
                            onChange={handleForm}
                        // required 
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
                                Não
                            </ButtonConfirm>
                            <ButtonCancel >
                                Sim
                            </ButtonCancel>
                        </ContainerButtons>
                    </Confirm>
                </ConfirmContainer>
                : ""}

        </ScreenContainer>
    )
}