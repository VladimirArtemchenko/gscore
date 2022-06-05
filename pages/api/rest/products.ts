import makeRequest from '../makeRequest';

export const products = () => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/products',
  method: 'get',
});
