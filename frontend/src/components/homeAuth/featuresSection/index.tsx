/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import useSWR from "swr";
import courseService, { CourseType } from "@/services/courseService";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";

const FeaturedSection = () => {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      {
        data.data?.map((course: CourseType) => (
          <div
            style={{
              // ARRUMAR O .ENV PARA UTILIZAR A VARIÁVEL
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(http://localhost:3000/${course.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "480px",
            }}
            key={course.id}
          >
            <HeaderAuth />
            <Container className="pt-4">
              <p className={styles.title}>{course.name}</p>
              <p className={styles.description}>{course.synopsis}</p>
              <Link href={`/courses/${course.id}`}></Link>
              <Button outline color="light" className={styles.button}>
                ACESSE AGORA!
                <img
                  src="/buttonPlay.svg"
                  alt="buttonImg"
                  className={styles.buttonImg}
                />
              </Button>
            </Container>
          </div>
        ))[0]
      }
    </>
  );
};
export default FeaturedSection;
