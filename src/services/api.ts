import axios from "axios";

const api = axios.create({
  baseURL: "https://api.igdb.com/v4/games",
  headers: {
    Accept: "application/json",
    "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
    Authorization: `Bearer ${process.env.REACT_APP_IGDB_TOKEN}`,
  },
});

export default api;
