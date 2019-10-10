import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/api/v1';
} else {
  url = 'https://rliwdxmkx1.execute-api.us-east-1.amazonaws.com/prod/api/v1';
}

export default axios.create({ baseURL: url });
