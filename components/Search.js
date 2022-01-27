import React from 'react';
import { Input, Box, Text, Divider, Button, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');
  const [githubData, setGithubData] = useState('');

  function handleGithubSearch() {
    fetch(`https://api.github.com/search/users/` + `${username}`, {
      method: 'POST',
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => setGithubData(data));
    console.log(data);
  }
  //   useEffect(() => {
  //     fetch(`https://api.github.com/search/users?q=` + { username })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <Box>
      <Text fontSize="lg"> Search for Github Repositories!</Text>
      <Divider />
      <Input
        placeholder="Enter a github username"
        onChange={handleUsername}
        value={username}
      />
      <Button
        colorScheme="telegram"
        position="fixed"
        ml="3px"
        onClick={handleGithubSearch}
      >
        Search
      </Button>

      {data.login}
    </Box>
  );
}
