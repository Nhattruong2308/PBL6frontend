import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "../TestInfo/style.css";
import Pagination from "react-js-pagination";
import "../TestInfo/pagination.css";
import CreateQuestion from "../CreateQuestion";
import EditQuestion from "../EditQuestion";
import { useNavigate } from "react-router-dom";
export default function TestInfo() {
  const [CurrentPage, setCurrentPage] = useState(1);
  let history = useNavigate();

  const data = [
    [
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "C",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "C",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "B",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "A",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "D",
      },
    ],

    [
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "A",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "D",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "B",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "B",
      },
      {
        dsc: "Describe this picture",
        A: "The dog is running through the grass",
        B: "The horse is running through the grass",
        C: "The cat is running through the grass",
        D: "The lion is running through the grass",
        to: "C",
      },
    ],
  ];
  const getTestsData = (pageNumber = 1) => {
    if (CurrentPage !== pageNumber) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <Center>
      <Box w="90%">
        <Box bg="rgba(37,42,52)" minH="50vh" w="100%">
          <HStack
            color={"white"}
            w="100%"
            alignItems="center"
            p="10px"
            h="50px"
          >
            <Icon
              as={BiArrowBack}
              fontSize="20px"
              cursor="pointer"
              onClick={() => history(-1)}
            />
            <Text fontWeight="bold" ml="10px">
              Quản lý bài test / Thông tin bài test
            </Text>

            <Spacer />
            <Text>Thêm question</Text>
            <CreateQuestion />
          </HStack>
          <Box className="table-question">
            <table bgcolor="white" style={{ width: "100%" }}>
              <tr>
                <th>Test ID</th>
                <th>Mô tả</th>
                <th>Đáp án A</th>
                <th>Đáp án B</th>
                <th>Đáp án C</th>
                <th>Đáp án D</th>
                <th>Action</th>
              </tr>
              {data[CurrentPage - 1].map((i) => {
                return (
                  <tr>
                    <td>1</td>
                    <td>{i.dsc}</td>
                    <td style={i.to === "A" ? { background: "#78FF9E" } : {}}>
                      {i.A}
                    </td>
                    <td style={i.to === "B" ? { background: "#78FF9E" } : {}}>
                      {i.B}
                    </td>
                    <td style={i.to === "C" ? { background: "#78FF9E" } : {}}>
                      {i.C}
                    </td>
                    <td style={i.to === "D" ? { background: "#78FF9E" } : {}}>
                      {i.D}
                    </td>
                    <td>
                      <Center>
                        <Flex>
                          <EditQuestion />
                          <Icon
                            as={AiFillDelete}
                            color="red"
                            cursor={"pointer"}
                          />
                        </Flex>
                      </Center>
                    </td>
                  </tr>
                );
              })}
            </table>
          </Box>

          <Box py={2}>
            <Pagination
              hideDisabled
              activePage={CurrentPage}
              totalItemsCount={10}
              itemsCountPerPage={5}
              itemClass="page-item"
              linkClass="page-link"
              itemClassNext="next-item"
              itemClassPrev="prev-item"
              innerClass="container"
              linkClassFirst="first-link"
              linkClassLast="last-link"
              activeClass="paginationActive"
              activeLinkClass="linkActive"
              disabledClass="disable"
              onChange={(pageNumber) => getTestsData(pageNumber)}
            />
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
