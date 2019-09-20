import axios from 'axios';
const dev = process.env.NODE_ENV === 'development' && true;

let baseURL;

if (dev) {
  baseURL = 'http://localhost:5000';
} else {
  baseURL = 'https://rliwdxmkx1.execute-api.us-east-1.amazonaws.com/prod';
}

export const avatarApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
