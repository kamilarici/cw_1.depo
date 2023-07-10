import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 62q9VojIHsvoW_LXgDB7rWu8tEJthmJ6kLZN4mDY7Sg",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
