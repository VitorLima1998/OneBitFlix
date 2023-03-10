import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/components/common/headerGeneric";

const Register = () => {
  return (
    <>
      <Head>
        <title>OneBitFlix - Register</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login"
        />
      </main>
    </>
  );
};

export default Register;
