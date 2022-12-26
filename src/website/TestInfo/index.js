import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "../TestInfo/style.css";
import Pagination from "react-js-pagination";
import "../TestInfo/pagquestion.css";
import CreateQuestion from "../CreateQuestion";
import EditQuestion from "../EditQuestion";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/API";
import axios from "axios";
export default function TestInfo() {
  const [CurrentPage, setCurrentPage] = useState(1);
  const toast = useToast();
  const [lData, setLData] = useState(0);
  const param = useParams();
  const [testData, setTestData] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    const URL =
      api + `questiosns_by_exam/${Number(param.id)}/?page=${CurrentPage}`;
    axios.get(URL).then((res) => {
      console.log(res.data);
      setTestData(res.data);
      setLData(res.data.data.length);
      console.log(res.data.data.length);
    });
  }, [CurrentPage]);
  console.log(testData);

  const getTestsData = (pageNumber = 1) => {
    if (CurrentPage !== pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  const updateTable = () => {
    const URL =
      api + `questiosns_by_exam/${Number(param.id)}/?page=${CurrentPage}`;
    axios.get(URL).then((res) => {
      console.log(res.data);
      setTestData(res.data);
      setLData(res.data.data.length);
      console.log(res.data.data.length);
    });
  };
  return (
    <Center>
      <Box w="90%">
        <Box bg="rgb(85,66,61,0.8)" w="100%">
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
            <CreateQuestion
              idTest={Number(param.id)}
              updateTable={updateTable}
            />
          </HStack>
          <Box className="table-question">
            <table
              bgcolor="#FEF6E4"
              style={{ width: "100%", color: "#001858" }}
            >
              <tr>
                <th>Test ID</th>
                <th>Đáp án A</th>
                <th>Đáp án B</th>
                <th>Đáp án C</th>
                <th>Đáp án D</th>
                <th>Action</th>
              </tr>
              {testData.data?.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>{i.exam_id}</td>
                    <td
                      style={i.answer === i.A ? { background: "#78FF9E" } : {}}
                    >
                      {i.A}
                    </td>
                    <td
                      style={i.answer === i.B ? { background: "#78FF9E" } : {}}
                    >
                      {i.B}
                    </td>
                    <td
                      style={i.answer === i.C ? { background: "#78FF9E" } : {}}
                    >
                      {i.C}
                    </td>
                    <td
                      style={i.answer === i.D ? { background: "#78FF9E" } : {}}
                    >
                      {i.D}
                    </td>
                    <td>
                      <Center>
                        <Flex>
                          <EditQuestion
                            question={i}
                            updateTable={updateTable}
                          />
                          <Icon
                            as={AiFillDelete}
                            color="red"
                            cursor={"pointer"}
                            onClick={() => {
                              const URL =
                                api + `delete_question/${Number(i.id)}`;
                              axios.delete(URL).then((res) => {
                                console.log(res.data);
                                toast({
                                  title: "Successfully!",
                                  description: "Đã xóa question.",
                                  status: "success",
                                  duration: 1500,
                                  isClosable: true,
                                });
                                if (lData === 1 && CurrentPage === 2)
                                  setCurrentPage(1);
                                updateTable();
                              });
                            }}
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
              totalItemsCount={testData.total}
              itemsCountPerPage={5}
              itemClass="page-item-ti"
              linkClass="page-link-ti"
              itemClassNext="next-item-ti"
              itemClassPrev="prev-item-ti"
              innerClass="container-ti"
              linkClassFirst="first-link-ti"
              linkClassLast="last-linl-ti"
              activeClass="paginationActive-ti"
              activeLinkClass="linkActive-ti"
              disabledClass="disable-ti"
              onChange={(pageNumber) => getTestsData(pageNumber)}
            />
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
