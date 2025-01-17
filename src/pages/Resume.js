import React from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ResumePDF from "../components/ResumePDF";

const Resume = () => {
  return (
    <Box p={4} bg="gray.900" color="white">
      <Box maxW="720px" mx="auto">
        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          mb={8}
          width={["100%", "100%", "120%"]}
        >
          <Heading
            fontFamily="Righteous"
            mb={4}
            borderBottom="2px solid white"
          >
            Personal Information
          </Heading>
          <Box textAlign="center" mb={4}>
            <Heading fontFamily="Righteous" as="h1" mb={2}>
              Syed Shahbaz Raza
            </Heading>
            <Flex justifyContent="center" alignItems="start">
              <Icon as={MdPhone} boxSize={6} mr={2} />
              <Text> +92 314-4020572</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="start">
              <Icon as={MdEmail} boxSize={6} mr={2} />
              <Text>shahbazraza1234@gmail.com</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="start">
              <Icon as={FaGithub} boxSize={6} mr={2} />
              <Text>
                <Link href="https://github.com/shahbaz-raza5" isExternal>
                  github.com/shahbaz-raza5
                </Link>
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          mb={8}
          width={["100%", "100%", "120%"]}
        >
          <Heading
            fontFamily="Righteous"
            mb={4}
            borderBottom="2px solid white"
          >
            Professional Experience
          </Heading>
          <Box mt={4}>
            <Text fontWeight="bold">Frontend Developer</Text>
            <Text color="gray.400">Freelancer | January 2020 - Present</Text>
            <Text mt={2}>
              - Designed and developed user interfaces for websites and applications using JavaScript, React.js, jQuery, Chakra UI, Bootstrap, and WordPress.
              <br />- Built mobile applications using React Native Expo, implementing intuitive user interfaces and seamless cross-platform performance.
              <br />- Developed multiple mobile apps with advanced features like navigation, state management, and animations using React Native Expo.
              <br />- Familiarity with the MERN stack (MongoDB, Express.js, React.js, Node.js) and the ability to develop full-stack applications.
              <br />- Excellent problem-solving skills and the ability to debug and resolve frontend and mobile app issues efficiently.
              <br />- Self-motivated and proactive attitude towards learning new technologies and staying updated with industry trends.
              <br />- Ability to work independently and manage multiple projects simultaneously while meeting deadlines.
            </Text>
          </Box>
          <Box mt={4}>
            <Text fontWeight="bold">IT Associate</Text>
            <Text color="gray.400">
              Apex Consulting and Harnessing Islamabad | May 2017 - July 2019
            </Text>
            <Text mt={2}>
              - Offered troubleshooting of connectivity issues across networks such as Wi-Fi and cellular.
              <br />- Monitored systems in operation and quickly troubleshooted errors.
            </Text>
          </Box>

          <Box mt={8}>
            <Text fontWeight="bold">System Support Engineer</Text>
            <Text color="gray.400">
              NCP National Center for Physics Islamabad | April 2017 - January
              2018
            </Text>
            <Text mt={2}>
              - Provided technical support to end-users for hardware and software issues.
              <br />
              - Performed troubleshooting and resolved system and network problems.
              <br />- Managed IT infrastructure and implemented security measures.
            </Text>
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          mb={8}
          width={["100%", "100%", "120%"]}
        >
          <Heading
            fontFamily="Righteous"
            mb={4}
            borderBottom="2px solid white"
          >
            Skills
          </Heading>

          <Box mt={4} display="flex" flexWrap="wrap">
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
              Bootstrap
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Chakra
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Node.js
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Express
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              MongoDB
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              Troubleshooting
            </Badge>
            <Badge colorScheme="teal" mr={2} mb={2}>
              IT Infrastructure
            </Badge>
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          width={["100%", "100%", "120%"]}
        >
          <Heading
            fontFamily="Righteous"
            mb={4}
            borderBottom="2px solid white"
          >
            Hobbies
          </Heading>
          <Box mt={4}>
            <Text>
              - Cricket: Enjoy playing and watching cricket, a sport that combines athleticism and strategy.
              <br />- Reading History: Fascinated by historical events and love exploring different eras through books.
              <br />- Hiking: Find solace in nature and enjoy exploring scenic trails and mountains.
            </Text>
          </Box>
        </Box>

        <Box textAlign="center" mt={4}>
          <PDFDownloadLink document={<ResumePDF />} fileName="Shahbaz Resume.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading..." : <button>Download Resume</button>
            }
          </PDFDownloadLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
