import React from 'react';
import { Input, Box, Text, Divider, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');

  async function handleGithubSearch() {
    fetch('/api/github', {
      method: 'POST',
      body: JSON.stringify(username),
    })
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }

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

      <h1> {data.login} </h1>
    </Box>
  );
}
