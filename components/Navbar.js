import React from 'react';
import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing="auto" borderRadius="md" bgColor="blue.400" w="100%">
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
