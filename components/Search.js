import React from 'react';
import {
  Input,
  Text,
  Button,
  Avatar,
  Heading,
  VStack,
  Container,
  List,
  ListItem,
  ListIcon,
  Link,
  HStack,
  Divider,
  Wrap,
} from '@chakra-ui/react';
import { LinkIcon, ViewIcon } from '@chakra-ui/icons';
import { FaStar, FaLocationArrow, FaFolderOpen } from 'react-icons/fa';

import { useState } from 'react';

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
  }

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  return (
    <VStack w={{ base: '90%', md: '80%', lg: '60%' }}>
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
        <VStack
          p={6}
          h="275px"
          bgColor="blue.400"
          borderRadius="lg"
          borderWidth="medium"
          borderColor="gray.400"
          align="center"
          justifyContent="center"
        >
          <HStack mt={4} mb={4} justifyContent="space-between" w="100%">
            <Avatar
              src={data.data.avatar_url}
              alignSelf="center"
              size="lg"
              borderWidth="thin"
              borderColor="black"
            />
            <Heading
              fontSize={{ base: 'sm', md: 'medium' }}
              fontFamily="mono"
              fontStyle="oblique"
            >
              {data.data.name}
            </Heading>
          </HStack>
          <Text fontFamily="sans-serif" spacing={1}>
            {data.data.bio}
          </Text>

          <List
            spacing={1}
            w="100%"
            d="flex"
            flexWrap="wrap"
            sx={{ gap: '12px' }}
          >
            <ListItem>
              <ListIcon as={FaLocationArrow} />
              {data.data.location}
            </ListItem>
            <ListItem>
              <ListIcon as={LinkIcon} />
              <Link href={data.data.html_url}> {data.data.html_url}</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ViewIcon} />
              Followers: {data.data.followers}
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} />
              {data.data.starred_url.length}
            </ListItem>
            <ListItem>
              <ListIcon as={FaFolderOpen} />
              Public Repos: {data.data.public_repos}
            </ListItem>
          </List>
        </VStack>
      ) : null}
    </VStack>
  );
}
