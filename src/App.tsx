import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Center } from "@chakra-ui/react";
import Main from "./Main";
export default function App() {
  return (
    <ChakraProvider>
      <Box>
              <Main/>
      </Box>
    </ChakraProvider>
  );
}
