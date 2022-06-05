import makeRequest from '../makeRequest';

export const payments = (token: string, data: { priceId: number }) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/payments/buy',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
