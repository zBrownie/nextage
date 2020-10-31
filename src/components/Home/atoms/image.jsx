import React from "react";

// import { Container } from './styles';

function ImageAtom({ data }) {
  return <img src={data.img} alt={data.title} />;
}

export default ImageAtom;
