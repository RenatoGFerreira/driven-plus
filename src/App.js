import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/css/GlobalStyle"
import AuthContext from "./contexts/AuthContext"
import { useState } from "react"

import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/Signup"
import Subscription from "./pages/Subscription/Subscription"
import Home from "./pages/Home/Home"
import InfoPlan from "./pages/InfoPlan/Infoplan"


export default function App() {

  const [user, setUser] = useState(
    {
      id: null,
      name: null,
      cpf: null,
      email: null,
      membership: null,
      token: null,
    }
  )

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscription/:idplan" element={<InfoPlan/>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}