import { useState } from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "./LoginComponents/FormLogin";
import { Header } from "./LoginComponents/Header";
import { InputLogin } from "./LoginComponents/InputLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { WarningModal } from "./LoginComponents/WarningModal";
import { useAppContext } from "../../Context/ContextProvider";
import { LangsCarrousel } from "./LoginComponents/LangsCarrousel";
import { Form } from "./LoginComponents/Form";

export function RegisterPage() {
  const { modal, setModal, setToken } = useAppContext()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
  
    try {
     const response = await axios.post(`https://journeycode-api-production.up.railway.app/users/register`, {
        name,
        email,
        password,
      });
      const token = response.data.token
        localStorage.setItem("token", token);
        setToken(token)
      navigate("/roadmaps");
    } catch (error) {
      setModal(error.response.data.message);
    }
  };

  return (
    <Form>
      <LangsCarrousel/>
      <FormLogin onSubmit={register}>
        <Header />
        <InputLogin
          type="text"
          placeholder="insira seu nome de usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputLogin
          type="email"
          placeholder="insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputLogin
          type="password"
          placeholder="insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="self-center font-bold text-blue-300 hover:scale-110 transition-transform duration-200"
          type="submit"
        >
          Cadastrar
        </button>
        <Link
          className="self-start font-bold  text-blue-300 hover:scale-110 transition-transform duration-200"
          to={"/"}
        >
          Já possui cadastro ? Login
        </Link>
      </FormLogin>
      <LangsCarrousel/>
      {modal && (
        <WarningModal onClose={() => setModal(null)}>{modal}</WarningModal>
      )}
    </Form>
  );
}
