import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" py={4} px={6} mt={20}>
      <Flex justify="center">
        <Text color="white">© 2025 My Portfolio. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
