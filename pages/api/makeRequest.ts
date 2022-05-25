import axios from 'axios';

export default ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
}) => axios({
  url,
  method,
  headers,
  params,
  data,
});
