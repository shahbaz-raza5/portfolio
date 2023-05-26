import React from "react";
import { Box, Center, Heading, Text, Badge } from "@chakra-ui/react";

const About = () => {
  return (
    <Center>
      <Box p={4} maxWidth="800px" bg="gray.900" color="white">
        <Heading mb={4}>About</Heading>

        <Box mb={8}>
          <Text fontWeight="bold">Background:</Text>
          <Text mt={2}>
          As a Frontend Developer, I designed and developed user-friendly interfaces,developing Apps in In react, leveraging React's powerful capabilities to create interactive web applications.As an IT Associate, I provided technical support and managed systems to ensure smooth operations and enhance productivity.
          I have also completed internships at Such TV and NCP National Center of Physics, where I gained practical knowledge in System Support Engineer.
          </Text>
        </Box>

        <Box mb={8}>
          <Text fontWeight="bold">Skills:</Text>
          <Box mt={2} display="flex" flexWrap="wrap">
            <Badge colorScheme="teal" mr={2} mb={2}>
              HTML
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              CSS
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              JavaScript
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              React
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Node.js
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              MongoDB
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Troubleshooting
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Technical Support
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              IT Infrastructure
            </Badge>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="bold">Internships:</Text>
          <Text mt={2}>
            - Such TV: Worked as a system support Enginner, assisting in Technical Support tasks and Troubleshooting.
            <br />
            - NCP National Center of Physics: Participated in a Computer Networking and System supports, contributing to the Management and maintenance of Systems.
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default About;
