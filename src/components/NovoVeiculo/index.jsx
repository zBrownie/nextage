import React, { useState } from "react";
import WebService from "../../services/webservice";

// import { Container } from './styles';

function NovoVeiculoOrganism() {
  const revenda = JSON.parse(window.localStorage.getItem("ano-revenda"));
  const [anosVeiculo, setAnosVeiculo] = useState({
    anoFab: "",
    anoMod: "",
  });

  const [listFamilias, setListFamilias] = useState([]);
  const [objFamilias, setObjFamilias] = useState({});
  const [listModelos, setListModelos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangeTxt = (event) => {
    setAnosVeiculo({
      ...anosVeiculo,
      [event.target.name]: event.target.value,
    });
  };
  const handleGetFamilias = async () => {
    setListModelos([]);

    WebService.get(
      `buscaFamilias?chave=${revenda.chave}&ano=${anosVeiculo.anoFab}`
    );
  };
  const handleGetModelos = () => {
    setListFamilias([]);
    WebService.get(
      `buscaModelosFamilia?chave=${revenda.chave}&familia=${objFamilias.id}&ano=${anosVeiculo.anoMod}`
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (listFamilias && listModelos.length == 0) {
    return <div>familias</div>;
  }

  if (listModelos && listFamilias.length == 0) {
    return <div>modelos</div>;
  }

  return (
    <div>
      <input
        type="number"
        name="anoFab"
        id="anoFab"
        value={anosVeiculo.anoFab}
        onChange={handleChangeTxt}
        maxLength={4}
      />
      <input
        type="number"
        name="anoMod"
        id="anoMod"
        value={anosVeiculo.anoMod}
        onChange={handleChangeTxt}
        maxLength={4}
      />
      <button type="button" onClick={handleGetFamilias}>
        OK
      </button>
    </div>
  );
}

export default NovoVeiculoOrganism;
