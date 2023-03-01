import api from "./api";

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};
export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
};

const courseService = {
  getNewestCourses: async () => {
    const res = await api
      .get("/courses/newest")
      .then((r) => {
        console.log(api);
        return r;
      })
      .catch((error) => {
        console.log(error.response);
        return error.response;
      });

    if (res != undefined) return res;
    console.log(api);

    return null;
  },
};

export default courseService;
