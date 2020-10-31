import { useRouter } from "next/dist/client/router";
import React from "react";

import WebService from "../../src/services/webservice";
// import { Container } from './styles';

function RevendedorasPage({ response, erro }) {
  const router = useRouter();
  const handleClick = (revenda) => {
    window.localStorage.setItem("age-revenda", JSON.stringify(revenda));
    router.push("/usuario");
  };
  if (erro) {
    return <div>{erro}</div>;
  }

  if (response?.length >= 1) {
    return (
      <div>
        <h1>Revendedora</h1>
        <ul>
          {response.map((revenda) => (
            <li key={revenda.fantasia} onClick={() => handleClick(revenda)}>
              <img
                src={revenda.empresaCL.grupo.logo?.url}
                alt={revenda?.fantasia}
              />
              <p>{revenda?.fantasia}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>Loading...</div>;
}

RevendedorasPage.getInitialProps = async (ctx) => {
  const res = await WebService.get(
    `buscaRevendas?chave=${ctx.query.param[0]}&tipo=${ctx.query.param[1]}`
  ).catch((err) => {
    return { response: [], erro: err.mesage };
  });
  console.log(ctx.query.param[0], ctx.query.param[1]);
  if (!res.data.statusRetorno?.sucesso) {
    return {
      response: [],
      erro: res.data.statusRetorno?.menssagem,
    };
  } else {
    return { response: res.data.retorno, erro: null };
  }
};

export default RevendedorasPage;
