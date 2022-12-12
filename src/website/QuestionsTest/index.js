import { Box, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useNavigate, useParams } from "react-router-dom";
import Questions from "./Questions";
import "../QuestionsTest/pagination.css";
import axios from "axios";
import { api } from "../../API/API";

export default function QuestionsTest() {
  const [answer, setAnswer] = useState([]);
  const data = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15"],
    ["16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25"],
    ["26", "27", "28", "29", "30"],
    ["31", "32", "33", "34", "35"],
    ["36", "37", "38", "39", "40"],
  ];
  const callbackAnswer = (childData) => {
    setAnswer(childData);
  };
  const params = useParams();
  const navigate = useNavigate();
  let CurrentPage = Number(params.id);
  const [questions, setQuestions] = useState([]);
  const [total, setTotal] = useState([]);
  console.log("page " + CurrentPage);
  useEffect(()=>{
    const URL = api + `questiosns_by_exam/${JSON.parse(localStorage.getItem('test'))['id']}/?page=${CurrentPage}`
    axios.get(URL).then(
      res => {
        console.log(res.data)
        setQuestions(res.data)
        let arr = []
        let arrzero = []
        for (let i = 0; i < res.data.total; i++) {
          // setTotal(prevState => (
          //   [...prevState, i+1]
          // ))
          arr =  [...arr, i+1]
          arrzero =  [...arrzero, "0"]
        }
        console.log(arr)
        setTotal(arr)
        if(answer.length === 0){
          setAnswer(arrzero)
        }
      }
    )
  },[CurrentPage])
  const list = data[CurrentPage - 1].map((item) => (
    <Questions data={item} answer={answer} callbackAnswer={callbackAnswer} />
  ));
  const listAnswer = answer.map((a, i) => {
    i = i + 1;
    let label = "";
    if (a === "0") label = label + "Chưa chọn đáp án";
    else if (a === "A") label = label + "Đáp án chọn: A";
    else if (a === "B") label = label + "Đáp án chọn: B";
    else if (a === "C") label = label + "Đáp án chọn: C";
    else label = label + "Đáp án chọn: D";
    return (
      <Tooltip key={i} label={label}>
        <Flex
          align="center"
          justifyContent="center"
          bg={a === "0" ? "#f5f5f5" : "blue.100"}
          minW="40px"
          h="40px"
          borderRadius={8}
          mx={1}
          cursor="pointer"
          mb={2}
          onClick={() => {
            let mod = i % 5;
            let page = (i - mod) / 5;

            if (mod === 0) {
              if (CurrentPage !== page) navigate(`/testing/page/${page}`);
            } else if (CurrentPage !== page + 1)
              navigate(`/testing/page/${page + 1}`);
          }}
        >
          <Text color={a === "0" ? "#D9D9D9" : "blue.300"}>{"" + i}</Text>
        </Flex>
      </Tooltip>
    );
  });
  console.log(answer)

  const getTestsData = (pageNumber = 1) => {
    if (CurrentPage !== pageNumber) {
      navigate(`/testing/page/${pageNumber}`);
    }
  };
  return (
    <Box w="100%">
      <Box
        w="100%"
        bg="#FEF6E4"
        boxShadow="2px 2px 2px 2px #D9D9D9"
        px={6}
        py={2}
        borderRadius={8}
      >
        <Text color="black" fontWeight="bold" mb={2}>
          Các câu hỏi đã làm:
        </Text>
        <Flex
          w="100%"
          overflowX={"scroll"}
          scrollSnapType="x"
          scrollBehavior="smooth"
        >
          {/* {listAnswer} */}
          {
            answer.map((a, i) => {
              i = i + 1;
              let label = "";
              if (a === "0") label = label + "Chưa chọn đáp án";
              else if (a === "A") label = label + "Đáp án chọn: A";
              else if (a === "B") label = label + "Đáp án chọn: B";
              else if (a === "C") label = label + "Đáp án chọn: C";
              else label = label + "Đáp án chọn: D";
              return (
                <Tooltip key={i} label={label}>
                  <Flex
                    align="center"
                    justifyContent="center"
                    bg={a === "0" ? "#f5f5f5" : "blue.100"}
                    minW="40px"
                    h="40px"
                    borderRadius={8}
                    mx={1}
                    cursor="pointer"
                    mb={2}
                    onClick={() => {
                      let mod = i % 5;
                      let page = (i - mod) / 5;
          
                      if (mod === 0) {
                        if (CurrentPage !== page) navigate(`/testing/page/${page}`);
                      } else if (CurrentPage !== page + 1)
                        navigate(`/testing/page/${page + 1}`);
                    }}
                  >
                    <Text color={a === "0" ? "#D9D9D9" : "blue.300"}>{"" + i}</Text>
                  </Flex>
                </Tooltip>
              );
            })
          }
        </Flex>
      </Box>
      <Box py={5} w="100%">
        <SimpleGrid columns={1} spacing={"5"}>
          {questions.data?.map((item,i) => 
             (
              <Questions data={item} index ={(CurrentPage-1)*5 + i} total={total} answer={answer} callbackAnswer={callbackAnswer} />
            ))
          }
        </SimpleGrid>
      </Box>
      <Box py={3} color="white">
        <Pagination
          hideDisabled
          activePage={CurrentPage}
          totalItemsCount={questions.total}
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
  );
}
