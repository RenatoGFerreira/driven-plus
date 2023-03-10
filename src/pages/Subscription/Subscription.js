import { ScreenContainer, Cards } from "./StyledSubscription";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";


export default function Subscription() {

    const [plan, setPlan] = useState([])
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',
            {
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            })
        promise.then(res => {
            setPlan(res.data)
            console.log(res.data)
        })

        promise.catch(err => {
            console.log(err.res.data.message)
        })

    }, [])

    return (
        <ScreenContainer>
            <h1>Escolha seu Plano</h1>
            {plan.map((item, index) => (
                <Link to={`/Subscription/${item.id}`} key={index} >
                    <Cards>
                        <img src={item.image} alt="DrivenCard" />
                        <span>R$ {item.price}</span>
                    </Cards>
                </Link>
            ))}
        </ScreenContainer>
    )
}
