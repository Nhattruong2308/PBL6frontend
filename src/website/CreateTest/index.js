import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { api } from "../../API/API";

export default function CreateTest() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [total, setTotal] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    const URL = api + "addexam";
    const data = {
      title: title,
      duration: duration,
      total_question: total,
      user_id: JSON.parse(localStorage.getItem("user"))["id"],
    };
    axios
      .post(URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <Button
        onClick={onOpen}
        color="white"
        bg="#08D9D6"
        colorScheme="blue"
        size="sm"
        m={3}
      >
        Thêm mới
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        preserveScrollBarGap={true}
      >
        <ModalOverlay />
        <ModalContent bg="#55423d" color="#FEF6E4" alignSelf={"center"}>
          <ModalHeader>Thêm bài test</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form onSubmit={handlesubmit}>
              <Box>
                <Center>
                  <Box>
                    <Text mb="5px">Tên bài test</Text>
                    <Input
                      color="black"
                      w="400px"
                      borderColor={"#08D9D6"}
                      bg="white"
                      border="4px"
                      type="text"
                      placeholder="Nhập tên bài test"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Box>
                </Center>

                <Center mt="10px">
                  <Box>
                    <Text mb="5px">Thời lượng</Text>
                    <Input
                      color="black"
                      w="400px"
                      borderColor={"#08D9D6"}
                      bg="white"
                      border="4px"
                      type="text"
                      placeholder="Nhập thời lượng bài test"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </Box>
                </Center>

                <Center mt="10px">
                  <Box>
                    <Text mb="5px">Số lượng câu</Text>
                    <Input
                      color="black"
                      w="400px"
                      borderColor={"#08D9D6"}
                      bg="white"
                      border="4px"
                      type="text"
                      placeholder="Nhập số lượng câu"
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </Box>
                </Center>

                <Center mt="20px">
                  <Button
                    w="400px"
                    colorScheme="blue"
                    bg="#08D9D6"
                    type="submit"
                    onClick={onClose}
                  >
                    Tạo
                  </Button>
                </Center>

                <Center>
                  <Button
                    mt="20px"
                    mb="10px"
                    w="400px"
                    colorScheme="red"
                    bg="#FF2E63"
                  >
                    Hủy
                  </Button>
                </Center>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
