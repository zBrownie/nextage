import React from "react";
import WebService from "../../src/services/webservice";

// import { Container } from './styles';

function PacotesPage({ response, erro }) {
  if (response) {
    return (
      <div>
        Pacotes
        <ul>
          {response.pacotesVisualizacao.map((pacotes) => (
            <li>
              <p>{pacotes?.descricao}</p>
              <span>Itens: {pacotes.itens?.length}</span>
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
export default PacotesPage;

PacotesPage.getInitialProps = async (ctx) => {
  const { chave, modelo, periodico, anoFab, anoMod } = ctx.query;

  const resp = await WebService.get(
    `buscaPacotes?chave=${chave}&modelo=${modelo}&periodico=${periodico}&anoFabricacao=${anoFab}&anoModelo=${anoMod}`
  );

  if (!resp.data.statusRetorno.sucesso) {
    return { response: null, erro: resp.data.statusRetorno.mensagemErro };
  }
  return {
    response: {
      categorias: resp.data.categorias,
      pacotesVisualizacao: resp.data.pacotesVisualizacao,
    },
    erro: null,
  };
};
