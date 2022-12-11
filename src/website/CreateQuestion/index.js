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
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

export default function CreateQuestion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgPre, setImgPre] = useState(require("../../imgs/img_predict.png"));
  const [img, setImg] = useState("");
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
        <ModalContent bg="#252A34" color="white" alignSelf={"center"}>
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
                    >
                      Lưu
                    </Button>
                    <Button
                      bg={"#08D9D6"}
                      colorScheme="blue"
                      color="white"
                      size="sm"
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
