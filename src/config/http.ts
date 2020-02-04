export const post = (url: string, data: any) => {
  return fetch(url, {
    method: 'POST',
    body: data
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get = (url: string) => {
  return fetch(url, {
    credentials: 'include'
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};
