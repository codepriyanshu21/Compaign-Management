import axios from 'axios';

export default async function handler(req, res) {
  const { method, url, headers, body } = req;

  try {
    // Forward the request to your HTTP backend
    const backendResponse = await axios({
      method,
      url: `http://34.10.166.233${req.url}`, // Append path and query
      headers: {
        ...headers,
        host: '34.10.166.233',
      },
      data: body,
      responseType: 'stream',
    });

    // Pipe the backend response to the client
    res.status(backendResponse.status);
    backendResponse.data.pipe(res);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
