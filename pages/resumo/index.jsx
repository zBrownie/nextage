import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function ResumoPage() {
  const router = useRouter();
  const [proprietario, setProprietario] = useState({});
  const [veiculo, setVeiculo] = useState({});
  const [km, setKm] = useState(0);
  useEffect(() => {
    const temp1 = JSON.parse(window.localStorage.getItem("age-proprietario"));
    const temp2 = JSON.parse(window.localStorage.getItem("age-veiculo"));

    setProprietario(temp1);
    setVeiculo(temp2);
  }, []);
  const handleSelectKM = () => {
    veiculo.km = km;

    window.localStorage.setItem("age-veiculo", JSON.stringify(veiculo));

    router.push("/servicos");
  };
  return (
    <div>
      <div className="proprietariocontainer">
        <span>{proprietario.nome}</span>
        <span>{proprietario.cpf_cnpj}</span>
        <span>{proprietario.email}</span>
        <span>{proprietario.telefoneCelular}</span>
      </div>

      <div className="veiculocontainer">
        <span>{veiculo.modeloGeral?.familiaCL?.descricao}</span>
        <span>{veiculo.modeloGeral?.descricao}</span>
        <span>{veiculo?.anoFab}</span>
        <span>{veiculo?.anoMod}</span>
        <span>{veiculo?.chassi}</span>
      </div>

      <div className="quilometragemcontainer">
        <input
          type="text"
          placeholder="Informe KM"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />

        <button onClick={handleSelectKM}>Avançar</button>
      </div>
    </div>
  );
}

export default ResumoPage;
