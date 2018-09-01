const Fetch = async (url, body, opts = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
  ...opts,
}).then(response => response.json());

export default Fetch;
