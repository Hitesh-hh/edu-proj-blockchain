const axios = require('axios');
// id: 'fc7c159e-6f28-4280-be18-c62f53d247c8',
const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_42cec8bbf88c46d183baff57fc70f0ea'
};

const data = {
  name: 'My Destination',
  to_url: 'https://8b68-203-110-242-40.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));