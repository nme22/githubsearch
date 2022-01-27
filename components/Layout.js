import SearchGithub from './Search';
import Navbar from './Navbar';
import Results from './Results';
import { VStack } from '@chakra-ui/react';

export default function Layout() {
  return (
    <VStack>
      <Navbar />
      <SearchGithub p="2px" />
    </VStack>
  );
}
