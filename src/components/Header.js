import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Slide,
  useColorMode,
  useMediaQuery
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Set the initial color mode to dark
    if (colorMode !== "dark") {
      toggleColorMode();
    }
  }, []);
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box
      bgColor={isMobile ? "gray.1200" : "gray.800"}
      py={isMobile ? "10px" : "50px"}
      zIndex={10}
      boxShadow={isMobile ? "0 0 2px 2px rgba(255, 255, 255, 0.2)" : "lg"}
      px={isMobile ? "10px" : "50px"}
    >
      <Flex justify="space-between" align="center">
        <Heading size="lg" color="white" fontFamily="Foldit">
          Portfolio
        </Heading>
        {isMobile && (
          <>
            <IconButton
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={handleToggle}
              variant="ghost"
              color={colorMode === "light" ? "gray.800" : "white"}
              _hover={{ color: "teal.400" }}
            />
            {isOpen && (
              <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
                <Box position="absolute" top="100%" left={0} right={0} bg="gray.800">
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
              </Slide>
            )}
          </>
        )}
        {!isMobile && (
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
          color={colorMode === "light" ? "teal.200" : "teal.400"}
          _hover={{ color: "teal.400" }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
