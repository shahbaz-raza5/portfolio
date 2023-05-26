import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, useMediaQuery } from '@chakra-ui/react';
import Typewriter from "typewriter-effect";
import { FaChevronRight } from "react-icons/fa";
const Project = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const projects = [
    {
      title: 'Gist App',
      description: 'I developed a React.js app using Redux and reusable components to develop a Gist application. Utilize GitHubs RESTful API to fetch and display users gists and public gists, while enabling CRUD operations. Implement hooks and redux-persist for efficient state management and persistence. Additionally, incorporate pagination to enhance the browsing experience within the application.',
      image: require('../projectimages/gist1.JPG'),
      images: [
       
        require('../projectimages/gist2.JPG'),
        require('../projectimages/gist3.JPG'),
        require('../projectimages/gist4.JPG'),
       ]
   
    },
     {
      title: 'Netflix Clone App',
      description: 'Create a Netflix clone app using React.js, hooks, CSS, and React Redux. This app will replicate the popular streaming platform, allowing users to browse and watch movies and TV shows. Utilize React.js to build the user interface, leveraging hooks for state management and component lifecycle. Apply CSS to style the app, providing an immersive and visually appealing experience. Incorporate React Redux to handle global state management',
      image: require('../projectimages/netflix1.JPG'),
      images: [
        require('../projectimages/netflix2.JPG'),
        require('../projectimages/netflix3.JPG'),
      ],
    },
    {
      title: 'Food Ordering App',
      description: 'Created an online food ordering website using WordPress, allowing customers to easily order food from local restaurants. Utilize WordPress intuitive interface and extensive plugin ecosystem to design and customize your website. Provide a seamless user experience with features such as menu browsing, order placement, and secure payment options.',
      image: require('../projectimages/wordpress1.JPG'),
      images: [
        require('../projectimages/wordpress2.JPG'),
        require('../projectimages/wordpress3.JPG'),
      ],
    },
    {
      title: 'Online Quiz App',
      description: 'I have Developed an interactive Online Quiz App in React.js. Engage in quizzes of diverse categories, and progress through beginner, intermediate, and expert levels to showcase your knowledge and skills.',
      image: require('../projectimages/Quiz1.JPG'),
      images: [
        require('../projectimages/Quiz2.JPG'),
        require('../projectimages/Quiz3.JPG'),
      ],
    },
    {
      title: 'Master Mind Game',
      description: 'Develop a Master Mind game using React.js, utilizing reusable components and hooks for efficient code organization and state management. Enjoy the classic logic-based game where players attempt to guess the hidden code within a limited number of attempts.',
      image: require('../projectimages/master-mind1.PNG'),
      images: [
        require('../projectimages/master-mind1.PNG'),
        require('../projectimages/master-mind1.PNG'),
      ],
    },
    {
      title: 'Weather App',
      description: 'Create a 5-day Weather Forecast App in React.js, utilizing a Weather API to fetch real-time weather data. Implement reusable components and hooks for efficient code structure and state management, providing users with accurate and up-to-date weather information for their desired locations.',
      image: require('../projectimages/weather3.PNG'),
      images: [
        require('../projectimages/weather2.PNG'),
        require('../projectimages/weather3.PNG'),
      ],
    },
   
   
   
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset the current image index when opening the gallery
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <Box bg="gray.900" color="white" minHeight="100vh" px={4}>
      <Box maxW="960px" mx="auto" py={8}>

        <Heading fontFamily="Righteous" fontSize='22px' mb={4} textAlign="center">
          <Typewriter 
            options={{
              strings: [
                "Welcome to My Portfolio",
                "I am Syed Shahbaz Raza",
                "Here is Some of my Work",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </Heading>
        <Text fontSize={isMobile ? "ml" : "xl"} mb={8} textAlign="center">
          Demonstrating my expertise in developing intuitive interfaces, seamless user experiences, and impactful solutions tailored to client needs.
        </Text>
        <Flex flexWrap="wrap" justifyContent={isMobile ? "center" : "flex-start"}>
          {projects.map((project, index) => (
            <Box
              key={index}
              flex={isMobile ? "0 0 calc(100% - 16px)" : "0 0 calc(33.33% - 16px)"}
              borderRadius="md"
              overflow="hidden"
              bg="gray.700"
              boxShadow="md"
              m={2}
              width={isMobile ? "100%" : ""}
            >
              <Box
                h={isMobile ? "300px" : "200px"}
                bgImage={`url(${project.image})`}
                bgSize="cover"
                bgPos="center"
                onClick={() => openGallery(project)}
                cursor="pointer"
              />
              <Box p={4}>
                <Heading as="h2" fontSize={isMobile ? "lg" : "xl"} mb={2}>
                  {project.title}
                </Heading>
                <Text fontSize={isMobile ? "sm" : ""}>{project.description}</Text>
                <Flex justifyContent="space-between" mt={4}>
                  <Button colorScheme="teal" onClick={() => openGallery(project)}>
                    View Images
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Gallery Modal */}
      <Modal
        key={selectedProject?.title}
        isOpen={Boolean(selectedProject)}
        onClose={closeGallery}
        size="xl"
        height="80%"
      >
        <ModalOverlay />
        <ModalContent width="100%">
          <ModalHeader>{selectedProject?.title} Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <Image
                src={selectedProject?.images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                objectFit="contain"
                height={isMobile ? "250px" : "400px"} // Adjust the image height as desired for mobile and desktop
                width="100%" // Set the width to match the browser width
                mx={2}
              />
            </Flex>
          </ModalBody>
          {selectedProject?.images.length > 1 && (
            <ModalFooter>
              <Button
                colorScheme="gray"
                onClick={nextImage}
                rightIcon={<FaChevronRight />}
              >
                Next Image
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Project;
