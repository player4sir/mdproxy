const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const path = event.path.replace('/.netlify/functions/proxy', '');
  const url = `https://md-iota.vercel.app${path}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
