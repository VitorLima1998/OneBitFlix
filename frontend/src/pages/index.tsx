import CardsSection from "../components/homeNoAuth/cardsSection";
import HeaderNoAuth from "../components/homeNoAuth/headerNoAuth";
import PresentationSection from "../components/homeNoAuth/presentationSection";
import SlideSection from "../components/homeNoAuth/slideSection";
import courseService, { CourseType } from "../services/courseService";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import styles from "../styles/HomeNoAuth.module.scss";

// Fazendo a interface
interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
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
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course} />
      </main>
    </>
  );
};

// Pegando as props
export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();

  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
