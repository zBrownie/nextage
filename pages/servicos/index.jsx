import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function ServicosPage() {
  const [revenda, setRevenda] = useState({});
  const [veiculo, setVeiculo] = useState({});
  useEffect(() => {
    let temp1 = JSON.parse(window.localStorage.getItem("age-revenda"));
    let temp2 = JSON.parse(window.localStorage.getItem("age-veiculo"));
    setRevenda(temp1);
    setVeiculo(temp2);
  }, []);
  const listServicos = [
    {
      servico: "Revisão",
      img: "",
      path: "/revisao",
    },
  ];
  const router = useRouter();
  const handleOnClick = (serv) => {
    switch (serv.path) {
      case "/revisao":
        handleRevisao(serv.path);
        break;

      default:
        break;
    }
  };

  const handleRevisao = (rota) => {
    router.push({
      pathname: rota,
      query: {
        chave: revenda?.chave,
        modelo: veiculo.modeloGeral?.codigo,
        km: veiculo?.km,
      },
    });
  };

  return (
    <div>
      Serviços
      <ul>
        {listServicos.map((serv) => (
          <li key={serv.servico} onClick={() => handleOnClick(serv)}>
            <p>{serv.servico}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicosPage;
