import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import { api, api_model } from "../../API/API";

export default function CreateQuestion(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [imgPre, setImgPre] = useState(require("../../imgs/img_predict.png"));
  const [img, setImg] = useState("");
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [answer, setAnswer] = useState("");
  const handlecreateBase64 = useCallback(async (e) => {
    const file = e.target.files[0];
    setImg(file);
    const base64 = await convertToBase64(file);
    setImgPre(base64);
    e.target.value = "";
  }, []);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const predictImg = () => {
    const formdata = new FormData();
    formdata.append("file", img);

    console.log(img);
    console.log(formdata);

    for (let i of formdata.entries()) {
      console.log(i[1]);
    }
    axios
      .post(api_model + "predict", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res.data);
        setAnswer(res.data.answer);
        setA(res.data.choices[0]);
        setB(res.data.choices[1]);
        setC(res.data.choices[2]);
        setD(res.data.choices[3]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSave = () => {
    const URL = api + "addquestion";
    const formdata = new FormData();
    formdata.append("image", img);
    formdata.append("A", A);
    formdata.append("B", B);
    formdata.append("C", C);
    formdata.append("D", D);
    formdata.append("title", "title");
    formdata.append("answer", answer);
    formdata.append("exam_id", props.idTest);
    axios
      .post(URL, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setAnswer("");
        setA("");
        setB("");
        setC("");
        setD("");
        setImg("");
        setImgPre(require("../../imgs/img_predict.png"));
        toast({
          title: "Successfully!",
          description: "Đã thêm 1 question.",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        props.updateTable();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReset = () => {
    setAnswer("");
    setA("");
    setB("");
    setC("");
    setD("");
    setImg("");
    setImgPre(require("../../imgs/img_predict.png"));
  };
  return (
    <>
      <Icon
        as={IoAddCircle}
        color="#08D9D6"
        cursor="pointer"
        fontSize="30px"
        _hover={{ color: "blue.300" }}
        onClick={onOpen}
      />
      <Modal
        closeOnOverlayClick={false}
        preserveScrollBarGap={true}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent bg="#55423d" color="#FEF6E4" alignSelf={"center"}>
          <ModalHeader>Thêm question</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form>
              <Box w="100%">
                <Flex w="100%">
                  <Box flex={7} py={3}>
                    <Image
                      src={imgPre}
                      w="400px"
                      h={"250px"}
                      objectFit={"cover"}
                      borderRadius={10}
                      float={"right"}
                      alt="img-predict"
                    />
                    <Flex mt={3} float="right">
                      Đáp án:
                      <Input
                        fontSize="18px"
                        color="black"
                        type="text"
                        w="400px"
                        h="40px"
                        ml={2}
                        bg="white"
                        borderColor={"#08D9D6"}
                        border="2px"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </Flex>
                  </Box>
                  <Box flex={3} py={5}>
                    <Center>
                      <Box>
                        <input
                          type={"file"}
                          id="file"
                          accept="image/*, png, jpeg, jpg"
                          style={{ display: "none" }}
                          onChange={handlecreateBase64}
                        />
                        <Button
                          as="label"
                          cursor={"pointer"}
                          htmlFor="file"
                          bg="yellow.500"
                          leftIcon={<MdFileUpload />}
                          size="sm"
                          _hover={{ bg: "yellow.400" }}
                        >
                          Tải ảnh
                        </Button>
                        <br />
                        <Button
                          mt={5}
                          cursor={"pointer"}
                          bg="red.500"
                          size="sm"
                          _hover={{ bg: "red.400" }}
                          onClick={predictImg}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Center>
                  </Box>
                </Flex>
                <Divider />

                <Box w="100%" py={3}>
                  <Center>
                    <Box>
                      <Flex>
                        <Box mr={10}>
                          <Text fontWeight="bold">A:</Text>
                          <Input
                            fontSize="15px"
                            color="black"
                            type="text"
                            w="350px"
                            h="35px"
                            ml={2}
                            bg="white"
                            borderColor={"#FF2E63"}
                            border="2px"
                            value={A}
                            onChange={(e) => setA(e.target.value)}
                          />
                        </Box>
                        <Box>
                          <Text fontWeight="bold">B:</Text>
                          <Input
                            fontSize="15px"
                            color="black"
                            type="text"
                            w="350px"
                            h="35px"
                            ml={2}
                            bg="white"
                            borderColor={"#FF2E63"}
                            border="2px"
                            value={B}
                            onChange={(e) => setB(e.target.value)}
                          />
                        </Box>
                      </Flex>

                      <Flex mt={3}>
                        <Box mr={10}>
                          <Text fontWeight="bold">C:</Text>
                          <Input
                            fontSize="15px"
                            color="black"
                            type="text"
                            w="350px"
                            h="35px"
                            ml={2}
                            bg="white"
                            borderColor={"#FF2E63"}
                            border="2px"
                            value={C}
                            onChange={(e) => setC(e.target.value)}
                          />
                        </Box>
                        <Box>
                          <Text fontWeight="bold">D:</Text>
                          <Input
                            fontSize="15px"
                            color="black"
                            type="text"
                            w="350px"
                            h="35px"
                            ml={2}
                            bg="white"
                            borderColor={"#FF2E63"}
                            border="2px"
                            value={D}
                            onChange={(e) => setD(e.target.value)}
                          />
                        </Box>
                      </Flex>
                    </Box>
                  </Center>
                  <Flex float={"right"} mt={5} mb={2}>
                    <Button
                      bg={"#FF2E63"}
                      colorScheme="red"
                      color="white"
                      mr={4}
                      size="sm"
                      onClick={onSave}
                    >
                      Lưu
                    </Button>
                    <Button
                      bg={"#08D9D6"}
                      colorScheme="blue"
                      color="white"
                      size="sm"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
