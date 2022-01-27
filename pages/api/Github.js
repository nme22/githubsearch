export default async function handler(req, res) {
  const username = JSON.parse(req.body);

  const response = await fetch(
    `https://api.github.com/search/users/${username}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer `,
        'Content-Type': `application/json`,
      },
    }
  );

  const data = await response.json();

  res.send({ data });
}
