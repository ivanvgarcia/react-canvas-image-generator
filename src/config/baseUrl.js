import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/';
} else {
  url = 'https://avatar-jp.herokuapp.com/';
}

export default axios.create({ baseURL: url });
