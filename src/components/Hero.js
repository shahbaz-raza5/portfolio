import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Box position="relative" width="100%">
      <Box
        position="relative"
        width="100%"
        paddingTop="56.25%" /* 16:9 aspect ratio for responsive video */
      >
        <ReactPlayer
          url={require("../videos/myvid.mp4")}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      </Box>
      <Box
        position="absolute"
        top="35%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
      >
        <Box mb={2}  textAlign="center" right="50%">
          <Image
            src={require("../images/profilepic.jpeg")}
            alt="Profile Picture"
            boxSize="200px"
            rounded="full"
            objectFit="cover"
            objectPosition="center"
            boxShadow="lg"
            
          />
        </Box>
        <Heading size="2xl" mt={0} mb={2}>
          Syed Shahbaz Raza
        </Heading>
        <Text mt={0} fontSize="xl" mb={4}>
          <Typewriter
            options={{
              strings: [
                "Transforming complex challenges into elegant solutions",
                "Unleashing the power of technology to fuel growth and streamline operations",
                "And more",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </Text>
        <Link to="/projects">
          <Button mt={0} colorScheme="teal" size="lg">
            View Profile
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
