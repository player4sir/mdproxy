const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    // 发起 GET 请求到指定的 URL
    const response = await axios.get('https://md-iota.vercel.app/api/menu');

    // 返回成功的响应数据
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // 捕获错误并返回 500 状态码和错误信息
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data' }),
    };
  }
};
