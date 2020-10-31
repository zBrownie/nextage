import React from "react";
import ImageAtom from "../atoms/image";
import TitleAtom from "../atoms/title";

// import { Container } from './styles';

function CardRevendaMolecule({ data, callback }) {
  return (
    <div className="cardrevenda" onClick={() => callback(data)}>
      <ImageAtom data={data} />
      <TitleAtom>{data.title}</TitleAtom>
    </div>
  );
}

export default CardRevendaMolecule;
