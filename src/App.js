import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/css/GlobalStyle"
import AuthContext from "./contexts/AuthContext"

import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/Signup"
import Subscription from "./pages/Subscription/Subscription"
import Home from "./pages/Home/Home"

export default function App() {

  const palavra = "arroz"
  return (
    <AuthContext.Provider value={palavra}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}