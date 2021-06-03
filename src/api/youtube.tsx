import axios from "axios";
const KEY = "AIzaSyCTfT-nmUh1unrIvUH66XBCuSQBlfY6-TY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
