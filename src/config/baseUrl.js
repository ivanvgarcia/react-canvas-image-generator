import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/';
} else {
  url = 'https://rliwdxmkx1.execute-api.us-east-1.amazonaws.com/prod/';
}

export default axios.create({ baseURL: url });
