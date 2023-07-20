import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com/users/jakub2787/repos";

export const getRepositories = () => 
  axios.get(`${githubAPIBaseURL}/users/maram-9/repos`)
    .then(response => response.data);