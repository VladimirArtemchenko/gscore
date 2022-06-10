import makeRequest from '../makeRequest';

export const subscribe = (token: string) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/subscribe/self',
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
});
export const changeSubscribe = (token: string, data: {
    productId: number,
    subscribeId: number,
}) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/subscribe/change-product',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
