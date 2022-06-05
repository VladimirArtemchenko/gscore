import makeRequest from '../makeRequest';

export const subscribe = (token: string) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/subscribe/self',
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
});
