import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { api } from "../../API/API";
import EditTest from "../../website/EditTest";

export default function Test2(props) {
  const [style, setStyle] = useState({ opacity: 0 });
  const [style2, setStyle2] = useState({ opacity: 1 });
  const navigate = useNavigate();
  const onDelete = () => {
    const URL = api + `delete_exam/${props.data.id}`;
    axios.delete(URL).then((res) => {
      console.log(res.data);
      props.updateData();
    });
  };
  return (
    <Box
      key={props.data.id}
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
        <IconButton
          bg="#08D9D6"
          icon={<AiFillEye />}
          colorScheme="blue"
          mr={2}
          size="sm"
          onClick={() => {
            navigate(`/test-info/${props.data.id}`);
          }}
        />
        <EditTest data={props.data} updateData={props.updateData} />
        <IconButton
          bg="#FF2E63"
          icon={<AiFillDelete />}
          colorScheme="red"
          mr={2}
          onClick={onDelete}
          size="sm"
        />
      </Flex>
      <Stack
        cursor="pointer"
        borderRadius={8}
        bg="#FEF6E4"
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

        <Text fontSize="25px" color="#001858" fontWeight="bold">
          {" "}
          {props.data.title}
        </Text>
        <Text color="#55423D" fontSize="20px">
          Số câu: {props.data.total_question}
        </Text>

        <Spacer />
        <Flex alignItems="center" mb="12px">
          <Image
            src={require("../../imgs/img1.png")}
            w="40px"
            h="40px"
            borderRadius={"50%"}
          />
          <Text ml="5px" fontSize="25px" color="#001858">
            {JSON.parse(localStorage.getItem("user"))["name"]}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
