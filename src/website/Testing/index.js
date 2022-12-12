import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../../API/API";

const formatTime = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60 - hours * 60);
  let seconds = Math.floor(time - minutes * 60 - hours * 3600);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return [hours, minutes, seconds];
};
export default function Testing() {
  useEffect(() => {
    document.title = "Testing - English Academy";
  }, []);

  const handleTabClose = (event) => {
    const URL = api + "submit_exam"
    const data = {
      exam_id: JSON.parse(localStorage.getItem('test'))['id'],
      user_id: JSON.parse(localStorage.getItem('user'))['id'],
      answer: JSON.parse(localStorage.getItem('answer')),
    }
    console.log(data)
    axios.get(URL,
      {
        params:{
          exam_id: JSON.parse(localStorage.getItem('test'))['id'],
          user_id: JSON.parse(localStorage.getItem('user'))['id'],
          answer: JSON.parse(localStorage.getItem('answer')),
        }
      }
      ).then(
      res => {
        console.log(res.data)
        localStorage.removeItem('test')
        localStorage.removeItem('answer')
        window.close();
      }
    )
  };
  const duration = Number(JSON.parse(localStorage.getItem('test'))['duration'])
  const [countdown, setCountdown] = useState(duration*60);
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countdown < 0) {
      clearInterval(timerId.current);
      const URL = api + "submit_exam"
      const data = {
        exam_id: JSON.parse(localStorage.getItem('test'))['id'],
        user_id: JSON.parse(localStorage.getItem('user'))['id'],
        answer: JSON.parse(localStorage.getItem('answer')),
      }
      axios.get(URL, 
        {
          params:{
            exam_id: JSON.parse(localStorage.getItem('test'))['id'],
            user_id: JSON.parse(localStorage.getItem('user'))['id'],
            answer: JSON.parse(localStorage.getItem('answer')),
          }
        }
        ).then(
        res => {
          console.log(res.data)
          localStorage.removeItem('test')
          localStorage.removeItem('answer')
          window.close();
        }
      )
    }
  }, [countdown]);
  return (
    <Flex
      className="background"
      maxW="100vw"
      minH="100vh"
      overflow="hidden"
      py={5}
    >
      <Box w="13%">
        <Box pos="fixed" top={5} left={3}>
          <Box w="80%">
            <Center w="100%" bg="#55423D" py={3}>
              <Box w="60%">
                <Image
                  src={require("../../imgs/img1.png")}
                  borderRadius="50%"
                  border="2px"
                  borderColor="#08D9D6"
                  w="100%"
                  h="100%"
                />
                <Text color="white" fontSize="17px">
                  John Wick
                </Text>
              </Box>
            </Center>
            <Box
              w="100%"
              bg="#FEF6E4"
              p={1.2}
              textAlign="center"
              color="black"
              fontWeight={"bold"}
            >
              <Text>Thời gian:</Text>
              <Flex justifyContent="center" w="100%">
                <Text bg="#FF2E63" color="white" mr={1} px={1} borderRadius={5}>
                  {formatTime(countdown)[0]}
                </Text>{" "}
                :{" "}
                <Text
                  bg="#FF2E63"
                  color="white"
                  ml={1}
                  mr={1}
                  px={1}
                  borderRadius={5}
                >
                  {formatTime(countdown)[1]}
                </Text>{" "}
                :{" "}
                <Text bg="#FF2E63" color="white" ml={1} px={1} borderRadius={5}>
                  {formatTime(countdown)[2]}
                </Text>
              </Flex>
              <Button
                mt={3}
                mb={2}
                size="sm"
                color="white"
                bg="#08D9D6"
                colorScheme="cyan"
                onClick={handleTabClose}
              >
                Kết thúc
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box w="87%" float={"right"} pr={10}>
        <Box
          w="100%"
          p={1}
          fontSize={"30px"}
          color="#FEF6E4"
          bg="#55423D"
          textAlign={"center"}
          fontWeight="bold"
          textTransform="uppercase"
        >
          {JSON.parse(localStorage.getItem('test'))['title']}
        </Box>
        <Box w="100%" bg="#F3D2C1" px={8} py={3}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
