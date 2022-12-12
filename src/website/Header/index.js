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
      color="#001858"
      as={"header"}
      pos="fixed"
      left="0"
      right="0"
      bgColor="rgb(243,210,193,0.8)"
      h="55px"
      top="0"
      zIndex={"10"}
      pl="20px"
      spacing={"10"}
      pr="20px"
    >
      <Flex>
        <Image src={require("../../imgs/logo.png")} w="40px" mr="5px" />
        <Box fontSize="13px" fontWeight={"bold"}>
          <Text textAlign={"center"}>English</Text>
          <Text>Academy</Text>
        </Box>
      </Flex>
      <Box bg={"#C3C3C3"} h="100%" w="1px"></Box>

      <Button
        color="#001858"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        <Link to="/">Đoán ảnh</Link>
      </Button>
      <Button
        color="#001858"
        fontWeight="bold"
        variant={"link"}
        fontSize={"20px"}
      >
        <Link to="/tests">Test</Link>
      </Button>
      <Spacer />
      {localStorage.getItem("user") ? (
        <Button
          variant={"link"}
          color="#001858"
          fontSize={"17px"}
          onClick={() => {
            localStorage.removeItem("user");
          }}
          as="a"
          href="/login"
        >
          Đăng xuất
        </Button>
      ) : (
        <Flex alignItems={"center"}>
          <Link to="/login">
            <Icon as={FaUser} mr="5px" fontSize={"17px"} />
          </Link>
          <Button variant={"link"} color="#001858" fontSize={"17px"}>
            <Link to="/login">Đăng nhập</Link>
          </Button>
          <Text fontSize={"17px"} ml="5px" mr="5px" userSelect={"none"}>
            {" "}
            /{" "}
          </Text>
          <Button variant={"link"} color="#001858" fontSize={"17px"}>
            <Link to="/sign-up">Đăng ký</Link>
          </Button>
        </Flex>
      )}
    </HStack>
  );
};

export default Header;
