import {
  Avatar,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
  Link,
  HStack,
} from '@chakra-ui/react';
import { LinkIcon, ViewIcon } from '@chakra-ui/icons';
import { FaStar, FaFolderOpen } from 'react-icons/fa';

const GithubCard = ({
  avatar,
  name,
  html_url,
  followers,
  starred_url,
  public_repos,
}) => {
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
    >
      <HStack mt={4} justifyContent="space-between" w="100%">
        <Avatar
          src={avatar}
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
          {name}
        </Heading>
      </HStack>

      <List w="100%" d="flex" flexWrap="wrap" sx={{ gap: '8px' }}>
        <ListItem>
          <ListIcon as={LinkIcon} />
          <Link href={html_url}>Github: {name}</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={ViewIcon} />
          Followers: {followers.length}
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} />
          {starred_url.length}
        </ListItem>
        <ListItem>
          <ListIcon as={FaFolderOpen} />
          Public Repos: {public_repos.length}
        </ListItem>
      </List>
    </VStack>
  );
};
export default GithubCard;
