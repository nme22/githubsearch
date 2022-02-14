import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';

// Use a layout component to ensure our app consitently follows the same structure/ design we want

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ChakraProvider>
   );
}

export default MyApp;
