import {BrowserRouter, Routes, Route }from "react-router-dom"
import GlobalStyle from "./Assets/css/GlobalStyle"
import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/Signup"
import Subscription from "./pages/Subscription/Subscription"
import Home from "./pages/Home/Home"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/subscription/:ID_DO_PLANO" element={<Subscription/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes> 
    </BrowserRouter>
  )
}