import axios from "axios";

// const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const baseURL = "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;
