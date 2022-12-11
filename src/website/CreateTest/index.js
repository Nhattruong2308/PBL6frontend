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
import React from "react";

export default function CreateTest() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <ModalContent bg="#252A34" color="white" alignSelf={"center"}>
          <ModalHeader>Thêm bài test</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form>
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
                    />
                  </Box>
                </Center>

                <Center mt="20px">
                  <Button
                    w="400px"
                    colorScheme="blue"
                    bg="#08D9D6"
                    type="submit"
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
