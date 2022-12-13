import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/API";
import axios from "axios";
export default function History(props) {
  const [result, setResult] = useState([]);
  const [score, setScore] = useState(0);
  let total = 0;
  let history = useNavigate();
  const params = useParams();

  useEffect(() => {
    const URL = api + "getResultOfExamByUser";
    axios
      .get(URL, {
        params: {
          exam_id: Number(params.id),
          user_id: JSON.parse(localStorage.getItem("user"))["id"],
        },
      })
      .then((res) => {
        console.log(res.data);
        setScore(10 / res.data.length);
        setResult(res.data);
      });
  }, []);
  for (let i = 0; i < result?.length; i++) {
    if (result[i].score_status === 1) {
      total += Number(score.toFixed(2));
    }
  }

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
              Lịch sử làm bài
            </Text>
          </HStack>
          <Box className="table-question">
            <table
              bgcolor="#FEF6E4"
              style={{ width: "100%", color: "#001858" }}
            >
              <tr>
                <th>ID</th>
                <th>Correct</th>
                <th>Answer</th>
                <th>Score</th>
              </tr>
              {result?.map((r, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{r.correct_answer}</td>
                    <td>{r.user_answer}</td>
                    <td>{r.score_status === 1 ? score.toFixed(2) : 0}</td>
                  </tr>
                );
              })}
            </table>
          </Box>
          <Text textAlign="center" py={2} color="white" fontWeight="bold">
            Tổng điểm: {total}
          </Text>
        </Box>
      </Box>
    </Center>
  );
}
