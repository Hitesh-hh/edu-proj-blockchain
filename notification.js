//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_42cec8bbf88c46d183baff57fc70f0ea'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICcweDU3NTFkMDgxNkIyMzlCRjBEY2ZjQTA3QTdGNWYwYkQ0ZGQ0Yzc2ZTMnKSAmJiANCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4NzhBNTFDNzgwMmUxODdlYzRmOEZGMWI3MjU4OTAxOTVmQzc5ZDA3YScpICYmIA0KKHR4X2xvZ3NfdG9waWMwID09ICcweGRmZDVlN2JmNDYzYTQ3YTM5MmFiNTE3YjdhNzRlZDFlY2Y0ZmI4OTE0ZjYxZGYxYmQ0Nzk0YjU3OWJlNzRhOTYnKQ==',
  network: 'ethereum-sepolia',
  destinationIds: ['fc7c159e-6f28-4280-be18-c62f53d247c8']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '0x5751d0816B239BF0DcfcA07A7F5f0bD4dd4c76e3') && 
// (tx_logs_address == '0x78A51C7802e187ec4f8FF1b725890195fC79d07a') && 
// (tx_logs_topic0 == '0xdfd5e7bf463a47a392ab517b7a74ed1ecf4fb8914f61df1bd4794b579be74a96')