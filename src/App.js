import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/css/GlobalStyle"
import AuthContext from "./contexts/AuthContext"

import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/Signup"
import Subscription from "./pages/Subscription/Subscription"
import Home from "./pages/Home/Home"

import profilePicture from "./assets/profile.png"

export default function App() {

  const perfil = "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
  return (
    <AuthContext.Provider value={perfil}>
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