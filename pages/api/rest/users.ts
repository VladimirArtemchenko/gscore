import makeRequest from '../makeRequest';

export const signUp = (data: { username: string; email: string; password: string }) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/sign-up',
  method: 'POST',
  data,
});
export const signIn = (data: { email: string; password: string }) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/sign-in',
  method: 'POST',
  data,
});
export const changeUserInfo = (
  data: { username: string; email: string },
  token: string,
) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users',
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
export const changeUserPassword = (
  data: { currentPassword: string; newPassword: string },
  token: string,
) => makeRequest({
  url: 'https://gscore-back.herokuapp.com/api/users/update-password',
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  data,
});
