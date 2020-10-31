import React from "react";
import CardRevendaMolecule from "../molecules/card_revenda.index";

// import { Container } from './styles';

function HomeOrganism({ data, callBack }) {
  return (
    <div className="container">
      <ul>
        {data.map((rev) => (
          <CardRevendaMolecule data={rev} callback={callBack} key={rev.chave} />
        ))}
      </ul>
    </div>
  );
}

export default HomeOrganism;
