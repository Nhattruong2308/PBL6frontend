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
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function ChangePass(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const open = props.open;
  const [typeP, setTypeP] = useState("password");
  const showPass = () => {
    if (typeP === "password") setTypeP("text");
    else setTypeP("password");
  };

  useEffect(() => {
    if (open) {
      onOpen();
    }
  }, [open]);
  const sendData = () => {
    props.parentCallback(false);
  };
  return (
    <>
      Đổi mật khẩu
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
              Đổi mật khẩu
            </AlertDialogHeader>

            <AlertDialogBody color={"#252A34"}>
              <Box mb="15px">
                <Text fontSize="18px">Mật khẩu cũ</Text>
                <Input
                  type={typeP}
                  placeholder="Nhập mật khẩu cũ"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box mb="15px">
                <Text fontSize="18px">Mật khẩu mới</Text>
                <Input
                  type={typeP}
                  placeholder="Nhập mật khẩu mới"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box mb="15px">
                <Text fontSize="18px">Xác nhận mật khẩu</Text>
                <Input
                  type={typeP}
                  placeholder="Nhập lại mật khẩu mới"
                  border="2px"
                  borderColor={"#252A34"}
                  focusBorderColor="#08D9D6"
                  w="100%"
                  h="40px"
                />
              </Box>

              <Box>
                <Checkbox
                  fontWeight="normal"
                  size="sm"
                  onChange={showPass}
                  colorScheme="red"
                  borderColor={"#FF2E63"}
                >
                  Hiện mật khẩu
                </Checkbox>
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => {
                  setTypeP("password");
                  sendData();
                  onClose();
                }}
                bgColor="#252A34"
                color="white"
                colorScheme={"blackAlpha"}
              >
                Lưu
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  setTypeP("password");
                  sendData();
                  onClose();
                }}
                ml={3}
              >
                Hủy
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default ChangePass;
