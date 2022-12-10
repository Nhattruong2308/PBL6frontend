import {
  Box,
  Center,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Questions(props) {
  const handleClickAnswer = (e) => {
    const answerUpdate = props.answer.map((a, i) => {
      if (i === Number(props.data) - 1) {
        return e.target.value;
      } else {
        return a;
      }
    });
    props.callbackAnswer(answerUpdate);
  };
  useEffect(() => {}, [props.answer]);
  return (
    <Flex
      w="100%"
      boxShadow="2xl"
      bg="white"
      key={props.data}
      p={3}
      borderRadius={8}
    >
      <Center flex={1}>
        <Text
          fontWeight="bold"
          fontSize="25px"
          color="white"
          borderRadius="50%"
          py={2}
          px={4}
          bg={Number(props.data) % 2 === 0 ? "#08D9D6" : "#FF2E63"}
        >
          {props.data}
        </Text>
      </Center>
      <Center flex={4}>
        <Image
          src={require("../../../imgs/dog.png")}
          w="85%"
          h="30vh"
          objectFit="cover"
          borderRadius={8}
        />
      </Center>
      <Center flex={5}>
        <RadioGroup
          w="80%"
          name={props.data}
          defaultValue={
            props.answer[Number(props.data) - 1] === "0"
              ? ""
              : props.answer[Number(props.data) - 1]
          }
        >
          <Stack w="100%" spacing={3}>
            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.data) - 1] === "1"
                  ? "blue.300"
                  : "#D9D9D9"
              }
              borderRadius={10}
              p={"2px"}
              minH="50px"
            >
              <Flex
                flex={1.5}
                align="center"
                justifyContent="center"
                bg={
                  props.answer[Number(props.data) - 1] === "1"
                    ? "blue.100"
                    : "#f5f5f5"
                }
                h="100%"
                py={3}
                borderLeftRadius={8}
              >
                <Radio
                  justifyContent="center"
                  w="100%"
                  value="1"
                  colorScheme="cyan"
                  border="4px"
                  borderColor="#D9D9D9"
                  onChange={handleClickAnswer}
                ></Radio>
              </Flex>

              <Flex
                alignItems="center"
                flex={8.5}
                px={2}
                fontSize="17px"
                bg={
                  props.answer[Number(props.data) - 1] === "1"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
              >
                The dog is running through the glass
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.data) - 1] === "2"
                  ? "blue.300"
                  : "#D9D9D9"
              }
              borderRadius={10}
              p={"2px"}
              minH="50px"
            >
              <Flex
                flex={1.5}
                align="center"
                justifyContent="center"
                bg={
                  props.answer[Number(props.data) - 1] === "2"
                    ? "blue.100"
                    : "#f5f5f5"
                }
                h="100%"
                py={3}
                borderLeftRadius={8}
              >
                <Radio
                  justifyContent="center"
                  w="100%"
                  value="2"
                  colorScheme="cyan"
                  border="4px"
                  borderColor="#D9D9D9"
                  onChange={handleClickAnswer}
                ></Radio>
              </Flex>

              <Flex
                alignItems="center"
                flex={8.5}
                px={2}
                fontSize="17px"
                bg={
                  props.answer[Number(props.data) - 1] === "2"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
              >
                The dog is running through the glass
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.data) - 1] === "3"
                  ? "blue.300"
                  : "#D9D9D9"
              }
              borderRadius={10}
              p={"2px"}
              minH="50px"
            >
              <Flex
                flex={1.5}
                align="center"
                justifyContent="center"
                bg={
                  props.answer[Number(props.data) - 1] === "3"
                    ? "blue.100"
                    : "#f5f5f5"
                }
                h="100%"
                py={3}
                borderLeftRadius={8}
              >
                <Radio
                  justifyContent="center"
                  w="100%"
                  value="3"
                  colorScheme="cyan"
                  border="4px"
                  borderColor="#D9D9D9"
                  onChange={handleClickAnswer}
                ></Radio>
              </Flex>

              <Flex
                alignItems="center"
                flex={8.5}
                px={2}
                fontSize="17px"
                bg={
                  props.answer[Number(props.data) - 1] === "3"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
              >
                The dog is running through the glass
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.data) - 1] === "4"
                  ? "blue.300"
                  : "#D9D9D9"
              }
              borderRadius={10}
              p={"2px"}
              minH="50px"
            >
              <Flex
                flex={1.5}
                align="center"
                justifyContent="center"
                bg={
                  props.answer[Number(props.data) - 1] === "4"
                    ? "blue.100"
                    : "#f5f5f5"
                }
                h="100%"
                py={3}
                borderLeftRadius={8}
              >
                <Radio
                  justifyContent="center"
                  w="100%"
                  value="4"
                  colorScheme="cyan"
                  border="4px"
                  borderColor="#D9D9D9"
                  onChange={handleClickAnswer}
                ></Radio>
              </Flex>

              <Flex
                alignItems="center"
                flex={8.5}
                px={2}
                fontSize="17px"
                bg={
                  props.answer[Number(props.data) - 1] === "4"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
              >
                The dog is running through the glass
              </Flex>
            </Flex>
          </Stack>
        </RadioGroup>
      </Center>
    </Flex>
  );
}
