import React from 'react';
import { Input, Button, Heading, Stack, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import GithubCard from './GithubCard';

export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({});

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
    e.preventDefault();
    setUsername(e.target.value);
  }

  return (
    <Stack w={{ base: '90%', md: '80%', lg: '90%' }}>
      <Heading size="lg"> Search for Github Repositories!</Heading>
      <HStack w="full">
        <Input
          placeholder="Enter a github username"
          onChange={handleUsername}
          value={username}
        />
        <Button colorScheme="telegram" ml="3px" onClick={handleGithubSearch}>
          Submit
        </Button>
      </HStack>
      {data.data ? (
        <>
          <Heading size="md">
            Total Search Reults: {data.data.total_count}
          </Heading>
          <HStack wrap="wrap">
            {data.data.items.map((user) => {
              console.log(user);
              return (
                <GithubCard
                  avatar={user.avatar_url}
                  name={user.login}
                  html_url={user.html_url}
                  followers={user.followers_url}
                  starred_url={user.starred_url}
                  public_repos={user.repos_url}
                />
              );
            })}
          </HStack>
        </>
      ) : null}
    </Stack>
  );
}
