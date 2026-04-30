const BASE_URL = 'http://127.0.0.1:8000/api';

async function apiRequest(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (data) options.body = JSON.stringify(data);

  const res = await fetch(BASE_URL + endpoint, options);
  return res.json();
}
