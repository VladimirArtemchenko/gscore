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
}).catch((error) => {
  alert(error.response.data.message);
});
