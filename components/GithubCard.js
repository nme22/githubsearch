import {
   Avatar,
   Heading,
   List,
   ListItem,
   ListIcon,
   Link,
   HStack,
} from '@chakra-ui/react';
import { LinkIcon, ViewIcon } from '@chakra-ui/icons';
import { FaStar, FaFolderOpen } from 'react-icons/fa';

// Create a custom Card for each github user passing in the following props.
// Further work on this project can fix the values of followers, stars, and public repos. These values in the response come back as endpoints. Look into the practice of unwrapping. Potential solution to this issue could be using graphql.
// An additional call must be made to the specific user since the response provides various endpoints for the data we want.

const GithubCard = ({
   avatar,
   name,
   html_url,
   followers,
   starred_url,
   public_repos,
   id,
}) => {
   return (
      <>
         <HStack mt={4} justifyContent="space-around" w="100%">
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
      </>
   );
};
export default GithubCard;
