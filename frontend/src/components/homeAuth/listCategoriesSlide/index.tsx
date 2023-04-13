import styles from "../../../styles/slideCategory.module.scss";
import SlideComponent from "@/components/common/slideComponent";
import categoriesService from "@/services/categoriesService";
import useSWR from "swr";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <SlideComponent course={data.data.courses} />
      <p className={styles.titleCategory}>{categoryName}</p>
    </>
  );
};
export default ListCategoriesSlide;
