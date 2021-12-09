import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://week-planner-node.herokuapp.com/'
    // baseURL: 'http://localhost:5000'
});

// export const githubApi = axios.create({
//     baseURL: 'https://api.github.com'
//   });


//   http://192.168.56.1:3333/




