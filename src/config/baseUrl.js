import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/api/v1';
} else {
  url = 'https://avatar-jp-staging.herokuapp.com/api/v1';
}

export default axios.create({ baseURL: url });
