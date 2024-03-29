import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/slideComponent";

const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", courseService.getFavCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>Minha Lista</p>
      {data.data.courses.lenght >= 1 ? (
        <SlideComponent course={data.data.courses} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>Você não tem nenhum curso na lista.</strong>
        </p>
      )}
    </>
  );
};
export default FavoriteCategory;
