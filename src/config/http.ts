import { ApiRoot } from './api';

const post = (url: string, data: any) => {
  const headers: { [k: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  if (localStorage.getItem('jwt_token')) {
    headers.Authorization = 'Bearer ' + localStorage.getItem('jwt_token');
  }
  return fetch(ApiRoot + url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => err);
};

const get = (url: string) => {
  const headers: { [k: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  if (localStorage.getItem('jwt_token')) {
    headers.Authorization = 'Bearer ' + localStorage.getItem('jwt_token');
  }
  return fetch(ApiRoot + url, {
    method: 'GET',
    headers: headers
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export default { post, get };
