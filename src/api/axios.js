import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key:"b770d7ceb4b0d84f51d5126cf2dc0e19",
    language: "ko-KR"
  }
})

export default instance;