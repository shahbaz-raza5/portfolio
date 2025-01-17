import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { HiOutlineMail, HiOutlinePhone} from "react-icons/hi";
import { FaGithub, FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
return (
<Box p={4} bg="gray.900" color="white" textAlign="center">
<Heading fontFamily="Righteous " mb={4}>Contact</Heading>
<Box>
    <Text fontWeight="bold" fontSize="xl" mb={4}>
      Let's Connect!
    </Text>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" mb={2}>
        <HiOutlineMail color="teal" size={20} />
        <Text ml={2} fontSize="lg">
          shahbazraza1234@gmail.com
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <HiOutlinePhone color="teal" size={20} />
        <Text ml={2} fontSize="lg">
          +92 314-4020572
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <FaWhatsappSquare color="teal" size={20} />
        <Text ml={2} fontSize="lg">
          +92 314-4020572
        </Text>
      </Box>
     
      <Box display="flex" alignItems="center" mb={2}>
        <FaGithub color="teal" size={20} />
        <Link href="https://github.com/shahbaz-raza5" ml={2} color="teal.500" fontSize="lg">
          GitHub Profile
        </Link>
      </Box>
    </Box>
  </Box>

  <Box mt={8}>
    <Text fontSize="lg">
      I am currently available for freelance work and collaborations. Feel free to reach out to discuss your project
      or any inquiries!
    </Text>
  </Box>

  <Box mt={8}>
    <Text fontSize="lg">Location: Islamabad, Pakistan</Text>
  </Box>
</Box>
);
};

export default Contact;