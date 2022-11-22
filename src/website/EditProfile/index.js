import {
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";

const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Flex
        cursor={"pointer"}
        alignItems={"center"}
        _hover={{ color: "#08D9D6", textDecoration: "underline" }}
        onClick={onOpen}
      >
        <FaEdit style={{ marginRight: "5px" }} /> Chỉnh sửa
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="sm"
        closeOnOverlayClick={false}
        preserveScrollBarGap={true}
      >
        <AlertDialogOverlay>
          <AlertDialogContent alignSelf="center" p="10px" userSelect="none">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Flex alignItems="center" mb="10px">
                <Image src={require("../../imgs/logo.png")} mr="7px" />
                <Text fontSize="30px" color={"#08D9D6"}>
                  ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
                </Text>
              </Flex>
              Chỉnh sửa thông tin
            </AlertDialogHeader>

            <AlertDialogBody color={"#252A34"}>
              <Box mb="15px">
                <Flex alignItems="center" fontSize="18px">
                  <MdAccountCircle />
                  <Text ml="5px">Tên tài khoản</Text>
                </Flex>

                <Input
                  type="text"
                  placeholder="Nhập tên tài khoản"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box mb="15px">
                <Flex alignItems="center" fontSize="18px">
                  <AiOutlineMail />
                  <Text ml="5px">Email</Text>
                </Flex>

                <Input
                  type="email"
                  placeholder="Nhập Email"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box mb="15px">
                <Flex alignItems="center" fontSize="18px">
                  <ImProfile />
                  <Text ml="5px">Họ và tên</Text>
                </Flex>

                <Input
                  type="text"
                  placeholder="Nhập họ và tên"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box>
                <Flex alignItems="center" fontSize="18px">
                  <BsGenderAmbiguous />
                  <Text ml="5px">Giới tính</Text>
                </Flex>

                <Input
                  type="text"
                  placeholder="Nhập giới tính"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                bgColor="#252A34"
                color="white"
                colorScheme={"blackAlpha"}
              >
                Sửa
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Hủy
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default EditProfile;
