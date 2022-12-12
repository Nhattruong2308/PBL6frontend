import React from "react";
import {
  Box,
  HStack,
  VStack,
  Spacer,
  Flex,
  Link,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack
      color="#001858"
      as="footer"
      bgColor="rgb(243,210,193,0.8)"
      h="20%"
      w="100%"
      zIndex={"2"}
      spacing={"0"}
    >
      <Box w="100%" h="25%">
        <Flex pl="10%" alignItems="center" pt="2px" pb="2px">
          <Image src={require("../../imgs/logo.png")} w="35px" mr="5px" />
          <Text fontSize="25px">ENGLISH ACADEMY</Text>
        </Flex>
        <Divider bg="#FEF6E4" h="2px" />
      </Box>
      <HStack
        w="100%"
        h="80%"
        pl="10%"
        spacing={"20"}
        pr="10%"
        pb="0.5%"
        pt="0.5%"
      >
        <Box>
          <Link>
            <Text fontSize="17px">About us</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Media</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Deals</Text>
          </Link>
        </Box>

        <Box>
          <Link>
            <Text fontSize="17px">Contact us</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Events</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Jobs</Text>
          </Link>
        </Box>

        <Box>
          <Link>
            <Text fontSize="17px">Term & Conditions</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Cookie Statement</Text>
          </Link>
          <Link>
            <Text fontSize="17px">Privacy Statement</Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="17px" textAlign="center">
            Contact
          </Text>
          <Flex alignItems="center">
            <a href="https://www.facebook.com/">
              <Image
                src={require("../../imgs/facebook.png")}
                w="50px"
                h="50px"
                mr="10px"
              />
            </a>
            <a href="https://www.instagram.com/">
              <Image
                src={require("../../imgs/instagram.png")}
                w="47px"
                h="47px"
              />
            </a>
            <a href="https://twitter.com/">
              <Image
                src={require("../../imgs/twitter.png")}
                w="70px"
                h="37px"
              />
            </a>
          </Flex>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Footer;
