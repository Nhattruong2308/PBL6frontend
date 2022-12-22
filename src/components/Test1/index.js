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

export default function Test1(props) {
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
      <Flex style={style} pos="absolute" mt="80px" ml="100px" zIndex={10}>
        <IconButton
          bg="#08D9D6"
          icon={<AiFillEye />}
          colorScheme="blue"
          size="sm"
          mr={2}
          onClick={() => {
            navigate(`/test-info/${props.data.id}`);
          }}
        />
        <EditTest data={props.data} updateData={props.updateData} />
        <IconButton
          bg="#FF2E63"
          icon={<AiFillDelete />}
          colorScheme="red"
          size="sm"
          mr={2}
          onClick={onDelete}
        />
      </Flex>
      <Stack
        cursor="pointer"
        borderRadius={8}
        bg="#FEF6E4"
        h="200px"
        w="350px"
        p={2}
        style={style2}
      >
        <Flex alignItems="center" mb="12px">
          <Image src={require("../../imgs/logo.png")} w="40px" h="40px" />
          <Text ml="5px" color={"#08D9D6"} fontSize="25px">
            ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
          </Text>
        </Flex>

        <Text fontWeight={"bold"} color="#001858">
          {props.data.title}
        </Text>
        <Text color="#55423D" fontSize="16px">
          Số câu: {props.data.total_question}
        </Text>

        <Spacer />
        <Flex alignItems="center" mb="12px">
          <Image
            src={require("../../imgs/img1.png")}
            w="30px"
            h="30px"
            borderRadius={"50%"}
          />
          <Text ml="5px" fontSize="18px" color="#001858">
            {JSON.parse(localStorage.getItem("user"))["name"]}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
