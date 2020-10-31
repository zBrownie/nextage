import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function ObservacoesPage() {
  const router = useRouter();
  const [observacoes, setObservacoes] = useState("");
  const [addReclame, setAddReclame] = useState(false);

  const [revenda, setRevenda] = useState({});
  const [veiculo, setVeiculo] = useState({});
  const [periodico, setPeriodico] = useState({});

  const handleReclames = () => setAddReclame(!addReclame);
  const handlePacotesPage = () => {
    router.push({
      pathname: "/pacotes",
      query: {
        chave: revenda?.chave,
        modelo: veiculo.modeloGeral?.codigo,
        periodico: periodico?.idPeriodico,
        anoFab: veiculo?.anoFab,
        anoMod: veiculo?.anoMod,
      },
    });
  };

  useEffect(() => {
    const temp1 = JSON.parse(window.localStorage.getItem("age-revenda"));
    setRevenda(temp1);
    const temp2 = JSON.parse(window.localStorage.getItem("age-veiculo"));
    setVeiculo(temp2);
    const temp3 = JSON.parse(window.localStorage.getItem("age-periodicos"));
    setPeriodico(temp3);
  }, []);
  if (addReclame) {
    return (
      <div>
        <textarea
          name="observacoes"
          id="obs"
          cols="12"
          rows="6"
          value={observacoes}
          onChange={(event) => setObservacoes(event.target.value)}
          placeholder="Escrava suas observações aqui. Ex: Barulho na frenagem, Ar pifando "
        >
          {" "}
        </textarea>
        <button onClick={handlePacotesPage}>Avançar</button>
      </div>
    );
  }
  return (
    <div>
      <p>Possui alguma observação a fazer?</p>
      <button onClick={handleReclames}>SIM</button>
      <button onClick={handlePacotesPage}>NAO</button>
    </div>
  );
}

export default ObservacoesPage;
