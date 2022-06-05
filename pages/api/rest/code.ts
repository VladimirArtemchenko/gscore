import makeRequest from '../makeRequest';

export const activate = (token: string, data: { code: string, origin: string }) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/code/activate',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, Origin: data.origin },
  data: { code: data.code },
});
