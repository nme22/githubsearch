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
  useToast,
} from '@chakra-ui/react';
import { LinkIcon, ViewIcon } from '@chakra-ui/icons';
import { FaStar, FaLocationArrow, FaFolderOpen } from 'react-icons/fa';

import { useState } from 'react';

export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({});
  const toast = useToast();

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
    <VStack>
      <Heading size="lg"> Search for Github Repositories!</Heading>

      <Input
        placeholder="Enter a github username"
        onChange={handleUsername}
        value={username}
        position="relative"
      />
      <Button
        colorScheme="telegram"
        position="relative"
        ml="3px"
        onClick={handleGithubSearch}
      >
        Submit
      </Button>

      {data.data ? (
        <VStack
          p={2}
          m={2}
          w="full"
          bgColor="blue.400"
          borderRadius="lg"
          borderWidth="thick"
          borderColor="gray.400"
        >
          <Avatar
            src={data.data.avatar_url}
            alignSelf="center"
            size="3xl"
            borderWidth="thin"
            borderColor="black"
          />
          <Heading fontSize="lg" fontFamily="mono" fontStyle="oblique">
            {data.data.name}
          </Heading>
          <List
            bgColor="whiteAlpha.400"
            spacing="4px"
            borderRadius="md"
            w="full"
            borderColor="whiteAlpha.400"
            borderWidth="2px"
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
          <Container>
            <Text fontWeight="bold" fontFamily="fantasy">
              {data.data.bio}
            </Text>
          </Container>
        </VStack>
      ) : null}
    </VStack>
  );
}
