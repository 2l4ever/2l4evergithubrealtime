// pages/_app.tsx
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme'; // si estás usando un tema personalizado

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
