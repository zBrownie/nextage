import Head from "next/head";
import HomeOrganism from "../src/components/Home/organism";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const listaRevendas = [
    {
      title: "HYUNDAI TESTE",
      img:
        "https://images.tcdn.com.br/img/img_prod/692322/produto_de_teste_1_1_20190405104734.png",
      chave: "CE7FF2B2A5AD7058274B067912D82829618AAB1E458EC596F60F3AF0D71B4A7F",
      tipo: "R",
    },
    {
      title: "APOLO TESTE",
      img:
        "https://images.tcdn.com.br/img/img_prod/692322/produto_de_teste_1_1_20190405104734.png",
      chave: "E496A8EB44A67E3BC6A3202F32DB1532B700304A510422CB7DCB17CA27C42211",
      tipo: "R",
    },
    {
      title: "DEALER TESTE",
      img:
        "https://images.tcdn.com.br/img/img_prod/692322/produto_de_teste_1_1_20190405104734.png",
      chave: "573CEC9EAC44C3498F631AD081C06E5152273E4C24B0A244DABBBDCC2EB03156",
      tipo: "R",
    },
  ];
  const router = useRouter();
  const handleSelectRevendedora = (revenda) => {
    router.push(`/w/${revenda.chave}/${revenda.tipo}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobato - Web Agendamento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeOrganism data={listaRevendas} callBack={handleSelectRevendedora} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por{" "}
          <img src="/logo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
