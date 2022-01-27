import { Input, Box, Text, Divider, Button } from '@chakra-ui/react';
export default function SearchGithub() {
  return (
    <Box>
      <Text fontSize="lg"> Search for Github Repositories!</Text>
      <Divider />
      <Input placeholder="Enter a github username" />
      <Button colorScheme="telegram" position="fixed" ml="3px">
        Search
      </Button>
    </Box>
  );
}
