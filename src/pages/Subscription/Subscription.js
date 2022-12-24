import { ScreenContainer, Cards } from "./StyledSubscription";
import DrivenPlus from "../../assets/plan_one.png"

export default function Subscription(){
    
    return (
        <ScreenContainer>
            <h1>Escolha seu Plano</h1>

            <Cards>
                <img src={DrivenPlus} alt="DrivenCard1"/>
                <span>R$ 39,99</span>
            </Cards>
            <Cards>
                <img src={DrivenPlus} alt="DrivenCard1"/>
                <span>R$ 39,99</span>
            </Cards>
            <Cards>
                <img src={DrivenPlus} alt="DrivenCard1"/>
                <span>R$ 39,99</span>
            </Cards>

        </ScreenContainer>
    )
}