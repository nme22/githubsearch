import { Input, Box, Text, Divider, Button, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
export default function SearchGithub() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=` + { username })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

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
        onClick={setData}
      >
        Search
      </Button>

      <VStack>
        <h1>{data.login}</h1>
      </VStack>
    </Box>
  );
}
