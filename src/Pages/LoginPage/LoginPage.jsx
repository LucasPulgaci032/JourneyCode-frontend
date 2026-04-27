import {useState } from "react";
import { ButtonLogin } from "./LoginComponents/ButtonLogin";
import { FormLogin } from "./LoginComponents/FormLogin";
import { Header } from "./LoginComponents/Header";
import { InputLogin } from "./LoginComponents/InputLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { WarningModal } from "./LoginComponents/WarningModal";
import { useAppContext } from "../../Context/ContextProvider";
import { Form } from "./LoginComponents/Form";
import { LangTopics } from "../RoadmapLangPages/RoadmapComponents/exports";
import { LangsCarrousel } from "./LoginComponents/LangsCarrousel";

export function LoginPage() {
  const { password, setPassword, modal, setModal, setToken } = useAppContext()
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const sendLogin = async (event) => {

    event.preventDefault();
    try {
      const res = await axios.post(`https://journeycode-api.onrender.com/users/login`, {
        email,
        password,
      });
      if (res.status === 200) {
        const token = res.data.token;
        
          localStorage.setItem("token", token)
          setToken(token)
          navigate("/roadmaps");
        
        
        
      }
    } catch (error) {
      setModal(error.response.data.message);
    }
  };

  return (
   <Form>
     <LangsCarrousel/>
      <FormLogin onSubmit={sendLogin}>
        <Header/>
        <InputLogin
          type="text"
          placeholder="insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLogin
          type="password"
          placeholder="insira sua senha"
          value={password}
          onChange={(p) => setPassword(p.target.value)}
        />

        <ButtonLogin type="submit" className='self-center font-bold text-blue-300 hover:scale-110 transition-transform duration-200'>Fazer Login</ButtonLogin>
        <Link className="self-center font-bold text-blue-300 hover:transition-transform duration-200" to={"/register"}>
          Não tem cadastro? inscreva-se
        </Link>
      </FormLogin>
      <LangsCarrousel/>
      {modal && (
        <WarningModal onClose={() => setModal(null)}>{modal}</WarningModal>
      )}
    </Form>
  );
}

