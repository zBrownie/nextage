import { useRouter } from "next/dist/client/router";
import React from "react";
import NovoVeiculoOrganism from "../../src/components/NovoVeiculo";
import WebService from "../../src/services/webservice";

// import { Container } from './styles';

function VeiculosPage({ response, erro }) {
  const router = useRouter();
  const handleSelectCar = (veiculo) => {
    console.log(veiculo);
    if (veiculo.proprietario.cpf_cnpj !== null) {
      window.localStorage.setItem(
        "age-proprietario",
        JSON.stringify(veiculo.proprietario)
      );
    }
    window.localStorage.setItem("age-veiculo", JSON.stringify(veiculo));

    router.push("/resumo");
  };

  if (erro) {
    return <div>{erro}</div>;
  }

  if (response) {
    return (
      <div>
        <ul>
          {response?.map((veiculo) => (
            <li key={veiculo.placa} onClick={() => handleSelectCar(veiculo)}>
              <img src={veiculo.modeloGeral?.familiaCL?.imagem?.url} alt="" />
              <p>{veiculo.modeloGeral?.familiaCL?.descrição}</p>
              <span>Placa: {veiculo?.placa}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (response.length === 0) {
    return <NovoVeiculoOrganism />;
  }

  return <div>Loading...</div>;
}

export default VeiculosPage;

VeiculosPage.getInitialProps = async (ctx) => {
  console.log(ctx.query);
  const res = await WebService.get(
    `buscaVeiculoCliente?chave=${
      ctx.query.chave
    }&placa=${ctx.query.placa.toUpperCase()}&cpf_cnpj=${ctx.query.cpf_cnpj}`
  );

  if (!res.data.statusRetorno?.sucesso) {
    return { response: [], erro: res.data.statusRetorno?.mensagemErro };
  }
  return { response: res.data.retorno, erro: null };
};
