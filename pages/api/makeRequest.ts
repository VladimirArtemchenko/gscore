import axios from 'axios';

export default ({
  url = '/',
  method = 'get',
  headers = {},
  params = {},
  data = {},
}) => axios({
  url,
  method,
  headers,
  params,
  data,
});
