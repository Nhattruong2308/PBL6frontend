import React from "react";
import {
  Box,
  HStack,
  Spacer,
  Flex,
  Text,
  Image,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <HStack
      color="white"
      as={"header"}
      pos="fixed"
      left="0"
      right="0"
      bgColor="rgba(255,46,99,0.5)"
      h="55px"
      top="0"
      zIndex={"10"}
      pl="20px"
      spacing={"10"}
      pr="20px"
    >
      <Flex>
        <Image src={require("../../imgs/logo.png")} w="40px" mr="5px" />
        <Box color={"white"} fontSize="13px" fontWeight={"bold"}>
          <Text textAlign={"center"}>English</Text>
          <Text>Academy</Text>
        </Box>
      </Flex>
      <Box bg={"#C3C3C3"} h="100%" w="1px"></Box>
      <Button
        color="white"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        Từ vựng
      </Button>
      <Button
        color="white"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        Ngữ pháp
      </Button>
      <Button
        color="white"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        <Link to="/predict">Đoán ảnh</Link>
      </Button>
      <Button
        color="white"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        Test
      </Button>
      <Spacer />
      <Flex alignItems={"center"}>
        <Link to="/login">
          <Icon as={FaUser} mr="5px" fontSize={"17px"} />
        </Link>
        <Button variant={"link"} color="white" fontSize={"17px"}>
          <Link to="/login">Đăng nhập</Link>
        </Button>
        <Text fontSize={"17px"} ml="5px" mr="5px" userSelect={"none"}>
          {" "}
          /{" "}
        </Text>
        <Button variant={"link"} color="white" fontSize={"17px"}>
          <Link to="/sign-up">Đăng ký</Link>
        </Button>
      </Flex>
    </HStack>
  );
};

export default Header;
