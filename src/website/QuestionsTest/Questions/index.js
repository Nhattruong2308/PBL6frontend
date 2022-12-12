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
import { api_image } from "../../../API/API";

export default function Questions(props) {
  const handleClickAnswer = (e) => {
    const answerUpdate = props.answer.map((a, i) => {
      if (i === Number(props.total[props.index]) - 1) {
        return e.target.value;
      } else {
        return a;
      }
    });
    console.log(answerUpdate)
    props.callbackAnswer(answerUpdate);
    localStorage.setItem('answer', JSON.stringify(answerUpdate))
  };
  useEffect(() => {}, [props.answer]);
  return (
    <Flex
      w="100%"
      boxShadow="2xl"
      bg="#FEF6E4"
      key={props.data.id}
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
          bg={Number(props.total[props.index]) % 2 === 0 ? "#08D9D6" : "#FF2E63"}
        >
          {props.total[props.index]}
        </Text>
      </Center>
      <Center flex={4}>
        <Image
          src={api_image+props.data.image}
          w="70%"
          borderRadius={8}
        />
      </Center>
      <Center flex={5}>
        <RadioGroup
          w="80%"
          name={String(props.total[props.index])}
          defaultValue={
            props.answer[Number(props.total[props.index]) - 1] === "0"
              ? ""
              : props.answer[Number(props.total[props.index]) - 1]
          }
        >
          <Stack w="100%" spacing={3}>
            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.total[props.index]) - 1] === "A"
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
                  props.answer[Number(props.total[props.index]) - 1] === "A"
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
                  value="A"
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
                  props.answer[Number(props.total[props.index]) - 1] === "A"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
                textTransform="lowercase"
              >
                {props.data.A}
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.total[props.index]) - 1] === "B"
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
                  props.answer[Number(props.total[props.index]) - 1] === "B"
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
                  value="B"
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
                  props.answer[Number(props.total[props.index]) - 1] === "B"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
                textTransform="lowercase"
              >
                {props.data.B}
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.total[props.index]) - 1] === "C"
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
                  props.answer[Number(props.total[props.index]) - 1] === "C"
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
                  value="C"
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
                  props.answer[Number(props.total[props.index]) - 1] === "C"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
                textTransform="lowercase"
              >
                {props.data.C}
              </Flex>
            </Flex>

            <Flex
              align="center"
              justifyItems="center"
              alignItems="center"
              bg={
                props.answer[Number(props.total[props.index]) - 1] === "D"
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
                  props.answer[Number(props.total[props.index]) - 1] === "D"
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
                  value="D"
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
                  props.answer[Number(props.total[props.index]) - 1] === "D"
                    ? "blue.50"
                    : "white"
                }
                minH="50px"
                borderRightRadius={8}
                textTransform="lowercase"
              >
                {props.data.D}
              </Flex>
            </Flex>
          </Stack>
        </RadioGroup>
      </Center>
    </Flex>
  );
}
