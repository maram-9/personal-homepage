import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = () => 
  axios.get(`${githubAPIBaseURL}/users/maram-9/repos`)
    .then(response => response.data);