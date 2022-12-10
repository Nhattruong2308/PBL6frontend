import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Testing() {
  useEffect(() => {
    document.title = "Testing - English Academy";
  }, []);

  const handleTabClose = (event) => {
    window.close();
  };

  return (
    <Flex
      className="background"
      maxW="100vw"
      minH="100vh"
      overflow="hidden"
      py={5}
    >
      <Box flex={1.2}>
        <Box pos="fixed" top={5} left={3}>
          <Box w="80%">
            <Center w="100%" bg="rgba(37,42,52)" py={3}>
              <Box w="60%">
                <Image
                  src={require("../../imgs/img1.png")}
                  borderRadius="50%"
                  border="2px"
                  borderColor="#08D9D6"
                  w="100%"
                  h="100%"
                />
                <Text color="white" fontSize="17px">
                  John Wick
                </Text>
              </Box>
            </Center>
            <Box
              w="100%"
              bg="white"
              p={2}
              textAlign="center"
              color="black"
              fontWeight={"bold"}
            >
              <Text>Thời gian:</Text>
              <Flex justifyContent="center" w="100%">
                <Text bg="#FF2E63" color="white" mr={1} px={1} borderRadius={5}>
                  00
                </Text>{" "}
                :{" "}
                <Text
                  bg="#FF2E63"
                  color="white"
                  ml={1}
                  mr={1}
                  px={1}
                  borderRadius={5}
                >
                  00
                </Text>{" "}
                :{" "}
                <Text bg="#FF2E63" color="white" ml={1} px={1} borderRadius={5}>
                  05
                </Text>
              </Flex>
              <Button
                mt={3}
                size="sm"
                color="white"
                bg="#08D9D6"
                colorScheme="cyan"
                onClick={handleTabClose}
              >
                Kết thúc
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box flex={8.8} pr={10}>
        <Box
          w="100%"
          p={1}
          fontSize={"30px"}
          color="white"
          bg="rgba(37,42,52)"
          textAlign={"center"}
          fontWeight="bold"
          textTransform="uppercase"
        >
          Kiểm tra Ielts 2022
        </Box>
        <Box w="100%" bg="white" px={8} py={3}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
