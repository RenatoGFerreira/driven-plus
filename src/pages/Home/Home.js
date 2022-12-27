import { ScreenContainer, HeaderContainer, ButtonsContainerCenter, ButtonsContainerFooter, ButtonChangePlan, ButtonCancelPlan } from "./StyledHome";
import profile from "../../assets/profile.png"

export default function Home() {

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
    return (
        <ScreenContainer>
            <HeaderContainer>
                <img src={planUser.image} />
                <img src={profile} alt="usuário" />
            </HeaderContainer>
            <ButtonsContainerCenter>
                {planUser.perks.map(p => (
                    <ButtonChangePlan
                        onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                    >
                        <p>{p.title}</p>
                    </ButtonChangePlan>
                ))}

            </ButtonsContainerCenter>
            <ButtonsContainerFooter>
                <ButtonChangePlan>
                    Mudar plano
                </ButtonChangePlan>
                <ButtonCancelPlan>
                    Cancelar plano
                </ButtonCancelPlan>
            </ButtonsContainerFooter>

        </ScreenContainer>
    )

}