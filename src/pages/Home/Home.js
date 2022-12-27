import { ScreenContainer, HeaderContainer, ButtonsContainerCenter, ButtonsContainerFooter, ButtonChangePlan, ButtonCancelPlan } from "./StyledHome";
import profile from "../../assets/profile.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
//import PlanContext from "../../contexts/PlanContext";
import AuthContext from "../../contexts/AuthContext";


export default function Home() {

    //item genérico até que se tenha o plano funcionando
    const planUser = {
        id: 1,
        name: "Driven Plus",
        image: "https://svgshare.com/i/dSP.svg",
        price: "39.99",
        perks: [
            {
                id: 1,
                membershipId: 1,
                title: "Solicitar brindes",
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                id: 2,
                membershipId: 1,
                title: "Materiais bônus de web",
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
    }

    const { auth } = useContext(AuthContext)
    //const { planUser } = useContext(PlanContext)
    const navigate = useNavigate()

    function cancelPlanUser(){
        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',{ headers: { Authorization: `Bearer ${auth}` } })
        promise.then(() => navigate('/subscription'))
        promise.catch(err => console.log(err.response.data.message))
    }

    function changePlanUser(){
        alert("mudarPlano")
    }

    return (
        <ScreenContainer>
            <HeaderContainer>
                <img src={planUser.image} />
                <img src={profile} alt="usuário" width="45px" height="45px"/>
            </HeaderContainer>
            <h1>Olá, Fulano</h1>
            <ButtonsContainerCenter>
                {planUser.perks.map((p,i) => (
                    <ButtonChangePlan key={i}>
                        <p>{p.title}</p>
                    </ButtonChangePlan>
                ))}

            </ButtonsContainerCenter>
            <ButtonsContainerFooter>
                <ButtonChangePlan onClick={changePlanUser}>
                    Mudar plano
                </ButtonChangePlan>
                <ButtonCancelPlan onClick={cancelPlanUser}>
                    Cancelar plano
                </ButtonCancelPlan>
            </ButtonsContainerFooter>

        </ScreenContainer>
    )

}