import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co", // Set your base URL
  timeout: 10000, // Set timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
