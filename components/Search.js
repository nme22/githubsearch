import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Heading,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import GithubCard from './GithubCard';

export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({});
  const [pagenumber, setPage] = useState(1);

  useEffect(() => {
    handleGithubSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagenumber]);

  const handlePageIncrement = () => {
    if (data.data.total_count > 50) setPage(pagenumber + 1);
  };
  const handlePageDecrement = () => {
    if (pagenumber > 1) setPage(pagenumber - 1);
  };

  async function handleGithubSearch() {
    fetch('/api/Github', {
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
              return (
                <VStack
                  p={4}
                  m={1}
                  w="275px"
                  h="275px"
                  bgColor="blue.400"
                  borderRadius="lg"
                  borderWidth="thin"
                  borderColor="gray.400"
                  align="center"
                  justifyContent="space-around"
                  key={user.id}
                >
                  <GithubCard
                    avatar={user.avatar_url}
                    name={user.login}
                    html_url={user.html_url}
                    followers={user.followers_url}
                    starred_url={user.starred_url}
                    public_repos={user.repos_url}
                  />
                </VStack>
              );
            })}
          </Stack>
        </>
      ) : null}
    </Stack>
  );
}
