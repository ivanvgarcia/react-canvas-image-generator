import axios from 'axios';
const dev = process.env.NODE_ENV === 'development' && true;

let baseURL;

if (dev) {
  baseURL = 'http://localhost:5000';
} else {
  baseURL = 'https://avatar-jp-staging.herokuapp.com/api/v1';
}

export const avatarApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
