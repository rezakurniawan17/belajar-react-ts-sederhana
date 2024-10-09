import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get("https://dummyjson.com/posts");
  return data;
};
