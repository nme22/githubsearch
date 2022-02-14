import React from 'react';
import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// Display a project title, addtional pages would be added here, and add a light and dark mode for the app for a better user experience.

export default function Navbar() {
   // useColorMode is a React Hook that gives you access to the current color mode and a function to toggle it.

   /* toggleColorMode can be used anywhere in the app tree to toggle the color from light to dark. 
   For the sake of simplicity we usual would put this on a navbar or a footer that persists on everypage. */

   const { colorMode, toggleColorMode } = useColorMode();
   return (
      <HStack spacing="auto" bgColor="blue.400" w="100%">
         <Heading size="md" fontFamily="mono">
            Github Search App
         </Heading>
         <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            isRound="true"
            size="md"
            onClick={toggleColorMode}
            alignSelf="flex-end"
            bgColor="blue.300"
         />
      </HStack>
   );
}
