import { useRouter } from "next/router";
import React from "react";
import WebService from "../../src/services/webservice";

// import { Container } from './styles';

function RevisaoPage({ response, erro }) {
  const router = useRouter();
  const handleOnClick = (periodicos) => {
    window.localStorage.setItem("age-periodicos", JSON.stringify(periodicos));
    router.push({
      pathname: "/observacoes",
    });
  };
  if (response) {
    return (
      <div>
        <ul>
          {response.map((periodicos) => (
            <li
              key={periodicos.idPeriodico}
              onClick={() => handleOnClick(periodicos)}
            >
              <img src={periodicos.imagem?.url} alt={periodicos?.idPeriodico} />
              <p>{periodicos?.descricao}</p>
              <p>{periodicos?.km}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  return <div>Loading...</div>;
}

export default RevisaoPage;

RevisaoPage.getInitialProps = async (ctx) => {
  const res = await WebService.get(
    `buscaPeriodico?chave=${ctx.query.chave}&modelo=${ctx.query.modelo}&km=${ctx.query.km}`
  );
  console.log(res.data);
  if (!res.data.statusRetorno.sucesso) {
    return { response: null, erro: res.data.statusRetorno.mensagemErro };
  }

  return { response: res.data.retorno, erro: null };
};
