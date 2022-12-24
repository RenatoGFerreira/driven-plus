import { ScreenContainer, HeaderContainer, LogoContainer, BenefitsContainer, PriceContainer, TituloContainer, BodyContainer, Form, InputContainer, TitleInput, ButtonEnter, GrouopCard } from "./StyledInfoPlan";
import Logo from "../../assets/plan_one.png"
import sheet from "../../assets/sheet.png"
import money from "../../assets/money.png"
import goBack from "../../assets/goBack.png"
import { useState } from "react";
import { Link } from "react-router-dom"

export default function InfoPlan() {

    const [nameCard, setNameCard] = useState()
    const [digitsCard, setDigitsCard] = useState()
    const [securityCode, setSecurityCode] = useState()
    const [validity, setValidity] = useState()

    function paynment() {
        alert("Pagamento")
    }


    return (
        <ScreenContainer>
            <HeaderContainer>
                <Link to={"/subscription"}>
                    <img src={goBack} alt="voltar" />
                </Link>
            </HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="Plano Escolhido" />
            </LogoContainer>
            <BenefitsContainer>
                <TituloContainer>
                    <img src={sheet} alt="Folha de Papel" /> <h1>Beneficios:</h1>
                </TituloContainer>
                <BodyContainer>
                    <p>1. Brindes Exclusivos</p>
                    <p>2. Materiais bônus de web</p>
                </BodyContainer>
            </BenefitsContainer>
            <PriceContainer>
                <TituloContainer>
                    <img src={money} alt="Folha de Papel" /> <h1>Preço:</h1>
                </TituloContainer>
                <BodyContainer>
                    <p>R$ 39.99 cobrados mensalmente</p>
                </BodyContainer>
            </PriceContainer>

            <Form onSubmit={paynment}>
                <InputContainer>
                    <TitleInput htmlFor="nameCard"></TitleInput>
                    <input
                        type="text"
                        placeholder="Nome impresso no cartão"
                        id="nameCard"
                        value={nameCard}
                        onChange={e => setNameCard(e.target.value)}
                        required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="digitsCard"></TitleInput>
                    <input
                        type="number"
                        placeholder="Digitos do cartão"
                        id="digitsCard"
                        value={digitsCard}
                        onChange={e => setDigitsCard(e.target.value)}
                        required />
                </InputContainer>

                <GrouopCard>
                    <InputContainer>
                        <TitleInput htmlFor="securityCode"></TitleInput>
                        <input
                            type="number"
                            placeholder="Código de segurança"
                            id="securityCode"
                            value={securityCode}
                            onChange={e => setSecurityCode(e.target.value)}
                            required />
                    </InputContainer>

                    <InputContainer>
                        <TitleInput htmlFor="validity"></TitleInput>
                        <input
                            type="number"
                            placeholder="Validade"
                            id="validity"
                            value={validity}
                            onChange={e => setValidity(e.target.value)}
                            required />
                    </InputContainer>
                </GrouopCard>
                <InputContainer>
                    <ButtonEnter>Assinar</ButtonEnter>
                </InputContainer>
            </Form>


        </ScreenContainer>
    )
}