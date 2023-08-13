import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const BASE_URL = "https://14108.fullstack.clarusway.com";
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: `${BASE_URL}`,

    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${BASE_URL}`,
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
