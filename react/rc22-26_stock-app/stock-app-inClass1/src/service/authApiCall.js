import axios from "axios";
export const login = async () => {
  const BASE_URL = "https://14108.fullstack.clarusway.com/";
  try {
    const { data } = await axios.post(
      `${BASE_URL}/account/auth/login/`,
      userData
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
