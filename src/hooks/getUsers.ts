import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get("https://dummyjson.com/users");
  return data;
};
