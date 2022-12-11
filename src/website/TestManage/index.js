import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import CreateTest from "../CreateTest";
import Test1 from "../../components/Test1";
import Test2 from "../../components/Test2";
import axios from "axios";
import { api } from "../../API/API";

export default function TestManage() {
  const context = useOutletContext();
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [exam,setExam] = useState([])
  useEffect(()=>{
    const URL = api + `exams_by_user/${JSON.parse(localStorage.getItem('user'))['id']}`

    axios.get(URL).then(
      res => {
        console.log(res.data)
        setExam(res.data)
      }
    )
  },[])
  useEffect(()=>{
    console.log(exam)
  },[exam])
  console.log(exam)

  if (context[0] === "0")
    return (
      <Center>
        <Box w="90%">
          <Box bg="rgba(37,42,52,0.5)" minH="50vh" w="100%">
            <Flex
              color={"white"}
              w="100%"
              alignItems="center"
              p="10px"
              h="50px"
            >
              <HiWrenchScrewdriver fontSize="20px" />
              <Text fontWeight="bold" ml="10px">
                Quản lý bài test
              </Text>
            </Flex>
            <Divider />
            <HStack w="100%" alignItems="center" px={7}>
              <CreateTest />
              <Spacer />
              <Text color="white">Tổng số bài test: 10</Text>
            </HStack>
            <Center>
              <SimpleGrid columns={2} spacing={"6"} p={6}>
                {exam.data?.map((item) => (
                  <Test1 data={item} />
                ))}
              </SimpleGrid>
            </Center>
          </Box>
        </Box>
      </Center>
    );

  return (
    <Center>
      <Box w="90%">
        <Box bg="rgba(37,42,52,0.5)" minH="50vh">
          <Flex color={"white"} w="100%" alignItems="center" p="10px" h="50px">
            <HiWrenchScrewdriver fontSize="20px" />
            <Text fontWeight="bold" ml="10px">
              Quản lý bài test
            </Text>
          </Flex>
          <Divider />
          <HStack w="100%" alignItems="center" px={7}>
            <CreateTest />
            <Spacer />
            <Text color="white">Tổng số bài test: 10</Text>
          </HStack>
          <Center>
            <SimpleGrid columns={2} spacing={"8"} p={6}>
              {exam.data?.map((item) => (
                <Test2 data={item} />
              ))}
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    </Center>
  );
}
