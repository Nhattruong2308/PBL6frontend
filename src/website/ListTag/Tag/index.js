import {
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Tag = (props) => {
  if (props.left === "0") {
    return (
      <Stack
        key={props.data}
        bg="rgba(255,255,255,0.95)"
        h="165px"
        w="300px"
        p="7px"
        borderRadius={"7px"}
        cursor="pointer"
        _hover={{ bg: "white", transform: "scale(1.07) rotate(3deg)" }}
        transition="all 0.5s"
      >
        <Flex alignItems="center" mb="12px">
          <Image src={require("../../../imgs/logo.png")} w="30px" h="30px" />
          <Text ml="5px" color={"#08D9D6"} fontSize="16px">
            ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
          </Text>
        </Flex>
        <Text color={"black"} fontWeight="bold" fontSize="16px">
          Unit {props.data}
        </Text>
        <Text color={"gray"} fontSize="14px">
          Từ vựng: 18
        </Text>
        <Spacer />
        <HStack alignItems="center" w="284px">
          <Image
            src={require("../../../imgs/img1.png")}
            w="25px"
            h="25px"
            borderRadius="50%"
          />
          <Text fontSize={"14px"} color={"black"}>
            John Wick
          </Text>
          <Spacer />
          <Button
            fontWeight={"bold"}
            color="white"
            bgColor={"#FF2E63"}
            colorScheme="red"
            w="80px"
            h="24px"
            fontSize="12px"
            onClick={() => {
              window.open(
                `/testing/page/${1}`,
                "_blank",
                "location=yes,resizable=no,status=yes,height=5000,width=5000"
              );
            }}
          >
            BẮT ĐẦU
          </Button>
        </HStack>
      </Stack>
    );
  }
  return (
    <Stack
      key={props.data}
      bg="rgba(255,255,255,0.95)"
      h="200px"
      w="370px"
      p="10px"
      borderRadius={"7px"}
      cursor="pointer"
      _hover={{ bg: "white", transform: "scale(1.07) rotate(3deg)" }}
      transition="all 0.5s"
    >
      <Flex alignItems="center" mb="15px">
        <Image src={require("../../../imgs/logo.png")} w="35px" h="35px" />
        <Text ml="5px" color={"#08D9D6"}>
          ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
        </Text>
      </Flex>
      <Text color={"black"} fontWeight="bold">
        Unit {props.data}
      </Text>
      <Text color={"gray"} fontSize="17px">
        Từ vựng: 18
      </Text>
      <Spacer />
      <HStack alignItems="center" w="350px">
        <Image
          src={require("../../../imgs/img1.png")}
          w="35px"
          h="35px"
          borderRadius="50%"
        />
        <Text fontSize={"17px"} color={"black"}>
          John Wick
        </Text>
        <Spacer />
        <Button
          fontWeight={"bold"}
          color="white"
          bgColor={"#FF2E63"}
          colorScheme="red"
          w="100px"
          h="30px"
          fontSize="15px"
          onClick={() => {
            window.open(
              `/testing/page/${1}`,
              "_blank",
              "location=yes,resizable=no,status=no,titlebar=no,height=5000,width=5000"
            );
          }}
        >
          BẮT ĐẦU
        </Button>
      </HStack>
    </Stack>
  );
};

export default Tag;
