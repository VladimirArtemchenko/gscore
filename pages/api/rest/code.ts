import makeRequest from '../makeRequest';

export const activate = (token: string, data: {
    code: string,
    origin: string
}) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/code/activate',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, Origin: data.origin },
  data: { code: data.code },
});
export const manage = (token: string, data: {
    codesIds: number[],
    subscribeId: number
}) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/code/manage',
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data: { codesIds: data.codesIds, subscribeId: data.subscribeId },
});
