import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />

        <p>Cadastre-se para acessar os cursos.</p>

        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
      <Container>
        <img src="/logoOnebitflix.svg" alt="logo Onebitflix" />
        <div>
          <Button outline color="danger">
            Entrar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
