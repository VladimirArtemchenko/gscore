import makeRequest from '../makeRequest';

export const signUp = (data: any) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/sign-up',
  method: 'POST',
  data,
});
export const signIn = (data: any) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/sign-in',
  method: 'POST',
  data,
});
export const changeUserInfo = (data: any, token: string) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users',
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
export const changeUserPassword = (data: any, token: string) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/update-password',
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
