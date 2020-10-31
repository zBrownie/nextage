import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

// import { Container } from './styles';

function UsuariaPage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    cpf_cnpj: "",
    placa: "",
  });

  const handleChangeTxt = (event) =>
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });

  const handleClick = () => {
    const revenda = JSON.parse(window.localStorage.getItem("age-revenda"));

    router.push({
      pathname: "/veiculos",
      query: {
        ...userInfo,
        chave: revenda.chave,
      },
    });
  };
  return (
    <div>
      <input
        type="text"
        name="cpf_cnpj"
        id="cpfCnpj"
        maxLength={11}
        placeholder="111.111.111-11"
        value={userInfo.cpf_cnpj}
        onChange={handleChangeTxt}
      />
      <input
        type="text"
        name="placa"
        id="placa"
        maxLength={7}
        placeholder="XXX-1111"
        value={userInfo.placa}
        onChange={handleChangeTxt}
      />
      <button type="button" onClick={handleClick}>
        Avançar
      </button>
    </div>
  );
}

export default UsuariaPage;
