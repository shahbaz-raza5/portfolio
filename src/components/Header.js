import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box bg="gray.800" py={4} px={6}>
      <Flex justify="space-between" align="center">
        <Heading size="lg" color="white">
          My Portfolio
        </Heading>
        {isMobile ? (
          <>
            <IconButton
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={handleToggle}
              variant="ghost"
              color="white"
            />
            {isOpen && (
              <Box
                position="absolute"
                top="100%"
                left={0}
                right={0}
                bg="gray.800"
                zIndex={10}
              >
                <Flex direction="column" p={4}>
                  <Link to="/" onClick={handleToggle}>
                    <Heading
                      size="md"
                      color={isActive("/") ? "teal.400" : "white"}
                      my={2}
                      _hover={{ color: "teal.400" }}
                    >
                      Home
                    </Heading>
                  </Link>
                  <Link to="/projects" onClick={handleToggle}>
                    <Heading
                      size="md"
                      color={isActive("/projects") ? "teal.400" : "white"}
                      my={2}
                      _hover={{ color: "teal.400" }}
                    >
                      Projects
                    </Heading>
                  </Link>
                  <Link to="/resume" onClick={handleToggle}>
                    <Heading
                      size="md"
                      color={isActive("/resume") ? "teal.400" : "white"}
                      my={2}
                      _hover={{ color: "teal.400" }}
                    >
                      Resume
                    </Heading>
                  </Link>
                  <Link to="/about" onClick={handleToggle}>
                    <Heading
                      size="md"
                      color={isActive("/about") ? "teal.400" : "white"}
                      my={2}
                      _hover={{ color: "teal.400" }}
                    >
                      About
                    </Heading>
                  </Link>
                  <Link to="/contact" onClick={handleToggle}>
                    <Heading
                      size="md"
                      color={isActive("/contact") ? "teal.400" : "white"}
                      my={2}
                      _hover={{ color: "teal.400" }}
                    >
                      Contact
                    </Heading>
                  </Link>
                </Flex>
              </Box>
            )}
          </>
        ) : (
          <Flex>
            <Link to="/">
              <Heading
                size="md"
                color={isActive("/") ? "teal.400" : "white"}
                mx={2}
                _hover={{ color: "teal.400" }}
              >
                Home
              </Heading>
            </Link>
            <Link to="/projects">
              <Heading
                size="md"
                color={isActive("/projects") ? "teal.400" : "white"}
                mx={2}
                _hover={{ color: "teal.400" }}
              >
                Projects
              </Heading>
            </Link>
            <Link to="/resume">
              <Heading
                size="md"
                color={isActive("/resume") ? "teal.400" : "white"}
                mx={2}
                _hover={{ color: "teal.400" }}
              >
                Resume
              </Heading>
            </Link>
            <Link to="/about">
              <Heading
                size="md"
                color={isActive("/about") ? "teal.400" : "white"}
                mx={2}
                _hover={{ color: "teal.400" }}
              >
                About
              </Heading>
            </Link>
            <Link to="/contact">
              <Heading
                size="md"
                color={isActive("/contact") ? "teal.400" : "white"}
                mx={2}
                _hover={{ color: "teal.400" }}
              >
                Contact
              </Heading>
            </Link>
          </Flex>
        )}
        <IconButton
          aria-label="Toggle Dark/Light Mode"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color="white"
        />
      </Flex>
    </Box>
  );
};

export default Header;
