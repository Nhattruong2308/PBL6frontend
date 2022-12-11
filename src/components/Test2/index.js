import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import EditTest from "../../website/EditTest";

export default function Test2(props) {
  const [style, setStyle] = useState({ opacity: 0 });
  const [style2, setStyle2] = useState({ opacity: 1 });
  return (
    <Box
      key={props.data}
      onMouseEnter={() => {
        setStyle({ opacity: 1 });
        setStyle2({ opacity: 0.7 });
      }}
      onMouseLeave={() => {
        setStyle({ opacity: 0 });
        setStyle2({ opacity: 1 });
      }}
    >
      <Flex style={style} pos="absolute" mt="100px" ml="140px" zIndex={10}>
        <Link to="/test-info">
          <IconButton
            bg="#08D9D6"
            icon={<AiFillEye />}
            colorScheme="blue"
            mr={2}
          />
        </Link>
        <EditTest />
        <IconButton
          bg="#FF2E63"
          icon={<AiFillDelete />}
          colorScheme="red"
          mr={2}
        />
      </Flex>
      <Stack
        cursor="pointer"
        borderRadius={8}
        bg="white"
        h="250px"
        w="450px"
        p={2}
        style={style2}
      >
        <Flex alignItems="center" mb="12px">
          <Image src={require("../../imgs/logo.png")} w="50px" h="50px" />
          <Text ml="5px" color={"#08D9D6"} fontSize="30px">
            ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
          </Text>
        </Flex>

        <Text fontSize="25px">Unit {props.data}</Text>
        <Text color="gray" fontSize="20px">
          Số câu: 25
        </Text>

        <Spacer />
        <Flex alignItems="center" mb="12px">
          <Image
            src={require("../../imgs/img1.png")}
            w="40px"
            h="40px"
            borderRadius={"50%"}
          />
          <Text ml="5px" fontSize="25px">
            John Wick
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
