export default async function handler(req, res) {
  const username = JSON.parse(req.body);

  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `${process.env.GITHUB_TOKEN} `,
      'Content-Type': `application/json`,
    },
  });

  const data = await response.json();

  res.send({ data });
}
