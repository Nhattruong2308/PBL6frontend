import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { useOutletContext } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
export default function ImgPredict() {
  const [hBox, setHBox] = useState("480px");
  const [hImg, setHImg] = useState("380px");
  const context = useOutletContext();
  const [imgPre, setImgPre] = useState(require("../../imgs/img_predict.png"));
  const handlecreateBase64 = useCallback(async (e) => {
    const file = e.target.files[0];
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
  useEffect(() => {
    if (context[0] === "-240px") {
      setHImg("380px");
      setHBox("480px");
    } else {
      setHImg("320px");
      setHBox("420px");
    }
  }, [context[0]]);
  return (
    <Center>
      <Box bg={"rgba(37,42,52,0.5)"} w="85%" color="white">
        <Flex w="100%" alignItems="center" p="10px" h="50px">
          <HiWrenchScrewdriver fontSize="20px" />
          <Text fontWeight="bold" ml="10px">
            Đoán ảnh
          </Text>
        </Flex>
        <Divider />
        <Flex
          w="100%"
          alignItems={"center"}
          h={hBox}
          transition="all 0.5s"
          py={3}
        >
          <Box flex={8} px={10}>
            <Center w="100%">
              <Image
                src={imgPre}
                w="100%"
                h={hImg}
                objectFit={"cover"}
                borderRadius={10}
                transition="all 0.5s"
                alt="img-predict"
              />
            </Center>
            <Center mt={4} w="100%">
              <Flex alignItems={"center"} w="100%">
                <Box flex={1.5}>
                  <Text fontSize="18px">Kết quả:</Text>
                </Box>

                <Box
                  flex={8.5}
                  bg="white"
                  border={"2px"}
                  borderRadius={5}
                  borderColor="#08D9D6"
                  px={3}
                  py={1}
                  maxH="40px"
                  overflow={"scroll"}
                  overflowX="hidden"
                  overflowY="hidden"
                >
                  <Text color="black" fontWeight="bold" fontSize="15px">
                    The dog is running in the glass
                  </Text>
                </Box>
              </Flex>
            </Center>
          </Box>
          <Box flex={2} h="100%" py={10}>
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
              mb={5}
            >
              Tải ảnh
            </Button>
            <Button
              cursor={"pointer"}
              bg="red.500"
              size="sm"
              _hover={{ bg: "red.400" }}
              mb={5}
            >
              Dự đoán
            </Button>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
