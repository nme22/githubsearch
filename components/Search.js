import { Input, Box, Text, Divider, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
export default function SearchGithub() {
  const [username, setUsername] = useState('');

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
        onClick={handleUsername}
      >
        Search
      </Button>
    </Box>
  );
}
