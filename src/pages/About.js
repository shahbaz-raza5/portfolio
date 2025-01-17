import React from "react";
import { Box, Center, Heading, Text, Badge } from "@chakra-ui/react";

const About = () => {
  return (
    <Center>
      <Box p={4} maxWidth="800px" bg="gray.900" color="white">
        <Heading fontFamily="Righteous" mb={4}>About</Heading>

        <Box mb={8}>
          <Text fontWeight="bold">Background:</Text>
          <Text mt={2}>
            As a Frontend Developer, I designed and developed user-friendly interfaces and interactive web applications, leveraging React's powerful capabilities. I have hands-on experience in building apps using **React Native Expo**, crafting cross-platform mobile applications with smooth user experiences and intuitive navigation. As an IT Associate, I provided technical support and managed systems to ensure smooth operations and enhance productivity.
            <br /><br />
            I have also completed internships at Such TV and NCP National Center of Physics, where I gained practical knowledge in system support engineering and networking.
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
              React Native Expo
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
            - **Such TV**: Worked as a System Support Engineer, assisting in technical support tasks and troubleshooting.
            <br />
            - **NCP National Center of Physics**: Participated in computer networking and system support, contributing to the management and maintenance of systems.
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default About;
