// Make call to github api from a backend route.
// Provides security with api keys and makes the code easier to read.
// Also makes it easier to debug if problems arise.
export default async function handler(req, res) {
   // For specific information about a user previously we used a different fetch url, go back into the commits for reference.
   // takes in the username and pagenumber from client side interaction to provide paginated results
   const { username, pagenumber } = JSON.parse(req.body);

   const response = await fetch(
      `https://api.github.com/search/users?q=${username}&page=${pagenumber}&per_page=50`,
      {
         method: 'GET',
         headers: {
            // hide our github token with an enviornment variable
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': `application/json`,
         },
      }
   );
   // await the response from the server
   const data = await response.json();
   // send the data back
   res.send({ data });
}
