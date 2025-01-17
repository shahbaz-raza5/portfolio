import React from "react";
import { Box, Heading, Text, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)"); // Check if the screen width is less than or equal to 480px (adjust as needed)

  return (
    <Box position="relative" width="100%">
      <Box
        position="relative"
        width="100%"
        paddingTop={isMobile ? "80%" : "56.25%"} /* Adjust aspect ratio for mobile and desktop */
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
        top={isMobile ? "60%" : "35%"} // Adjust the vertical position for mobile
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        
      >
       
        <Box mb={2}   textAlign="center">
          <Image
            src={require("../images/image.png")}
            alt="Profile Picture"
            boxSize={isMobile ? "100px" : "200px"} // Adjust the size for mobile
            boxShadow={isMobile ? "0 0 4px 3px rgba(255, 255, 255, 0.5)" : "lg"}
            rounded="full"
            objectFit="cover"
            objectPosition="center"
            
            margin="0 auto" // Center the profile picture horizontally for mobile
          />
        </Box>
         <Heading fontFamily="Righteous " width={isMobile ? "200px" : "auto"} size={isMobile ? "md" : "2xl"} mt={0} mb={2}> {/* Use a smaller heading size for mobile */}
          Syed Shahbaz Raza
        </Heading>
        <Text height={10} mt={0} fontSize={isMobile ? "md" : "xl"} mb={4}> {/* Adjust the font size for mobile */}
          <Typewriter
            options={{
              strings: [
                "Transforming complex challenges into elegant solutions",
                "Unleashing the power of technology",
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
          <Button   colorScheme="teal" size={isMobile ? "md" : "md"} mt={isMobile ? "5vh" : "5px"}>
            View Profile
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
