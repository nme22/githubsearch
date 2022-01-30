import React, { useState, useEffect } from 'react';
import { Input, Button, Heading, Stack, HStack, Box } from '@chakra-ui/react';
import GithubCard from './GithubCard';
import debounce from 'debounce';

export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({});
  const [pagenumber, setPage] = useState(1);

  useEffect(() => {
    handleGithubSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);

  const handlePageIncrement = () => {
    setPage(pagenumber + 1);
  };
  const handlePageDecrement = () => {
    if (pagenumber > 1) setPage(pagenumber - 1);
  };

  async function handleGithubSearch() {
    fetch('/api/github', {
      method: 'POST',
      body: JSON.stringify({
        username,
        pagenumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  return (
    <Stack w={{ base: '90%', md: '80%', lg: '90%' }}>
      <Heading size="lg" alignSelf="center">
        {' '}
        Search for Github Repositories!
      </Heading>
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
      <HStack justifyContent="center">
        <Button size="md" onClick={handlePageIncrement}>
          Next Page
        </Button>
        <Button size="md" onClick={handlePageDecrement}>
          Previous
        </Button>
      </HStack>

      {data.data ? (
        <>
          <Heading size="md" alignSelf="center">
            Total Search Results: {data.data.total_count}
          </Heading>

          <Stack
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="space-around"
          >
            {data.data.items?.map((user) => {
              console.log(user);
              return (
                <GithubCard
                  avatar={user.avatar_url}
                  name={user.login}
                  html_url={user.html_url}
                  followers={user.followers_url}
                  starred_url={user.starred_url}
                  public_repos={user.repos_url}
                  id={user.id}
                />
              );
            })}
          </Stack>
        </>
      ) : null}
    </Stack>
  );
}
