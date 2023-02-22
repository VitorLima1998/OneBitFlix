import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.css";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="OneBitFlix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de forma simples e fácil"
        />
      </Head>
      <main>
        <HeaderNoAuth />
        <PresentationSection />
      </main>
    </>
  );
};

export default HomeNoAuth;
