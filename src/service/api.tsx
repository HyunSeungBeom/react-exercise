import axios from "axios";

const url = "http://localhost:8080/api/";

export const getSource = async (params: string) => {
  const response = await axios.get(url + params);
  return response.data;
};
