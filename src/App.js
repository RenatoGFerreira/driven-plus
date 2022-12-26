import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import GlobalStyle from "./assets/css/GlobalStyle"
import AuthContext from "./contexts/AuthContext"
import PlanContext from "./contexts/PlanContext"

import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/Signup"
import Subscription from "./pages/Subscription/Subscription"
import Home from "./pages/Home/Home"
import InfoPlan from "./pages/InfoPlan/Infoplan"



export default function App() {

  const [auth, setAuth] = useState(localStorage.getItem("token"))
  const [planUser, setPlanUser] = useState([])
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <PlanContext.Provider value={{planUser, setPlanUser}}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/subscription/:idplan" element={<InfoPlan />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PlanContext.Provider>
    </AuthContext.Provider>
  )
}