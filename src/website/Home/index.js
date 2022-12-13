import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";
import { SiPytest } from "react-icons/si";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";
function Home() {
  const [left, setLeft] = useState("-240px");
  const [wCenter, setWCenter] = useState(
    localStorage.getItem("user") ? "97%" : "100%"
  );
  const [wLeft, setWLeft] = useState("3%");
  const ClickMenu = () => {
    if (left === "0") {
      setLeft("-240px");
      setWCenter("97%");
      setWLeft("3%");
    } else {
      setLeft("0");
      setWCenter("84%");
      setWLeft("16%");
    }
  };
  return (
    <Stack minH="100vh" maxW="100vw" overflow="hidden" pt="55px">
      <Header />

      <Flex w="100vw">
        {localStorage.getItem("user") ? (
          <>
            <IconButton
              color={"white"}
              bg="rgb(85,66,61,0.8)"
              icon={<AiOutlineMenu />}
              size="sm"
              pos="fixed"
              left="10px"
              top="75px"
              onClick={ClickMenu}
              zIndex="10"
              _hover={{ bg: "black" }}
            />
            <Box w={wLeft} transition={"all 0.5s"}>
              <Box
                bgColor={"rgb(85,66,61,0.8)"}
                pos="fixed"
                left={left}
                w="240px"
                h="500px"
                transition={"all 0.5s"}
              >
                <Center mt="70px">
                  <Box>
                    <Center>
                      <Box w="120px">
                        <Image
                          src={require("../../imgs/img1.png")}
                          w="120px"
                          h="120px"
                          borderRadius="50%"
                        />
                        <Text color="white" textAlign="center">
                          {JSON.parse(localStorage.getItem("user")).name}
                        </Text>
                      </Box>
                    </Center>
                    <List
                      color="white"
                      spacing={"3"}
                      fontSize="15px"
                      mt="20px"
                      cursor="pointer"
                    >
                      <ListItem _hover={{ color: "#08D9D6" }}>
                        <Link to="">
                          <ListIcon as={ImHome} />
                          Trang chủ
                        </Link>
                      </ListItem>
                      <ListItem _hover={{ color: "#08D9D6" }}>
                        <Link to="/tests">
                          <ListIcon as={SiPytest} />
                          Làm bài kiểm tra
                        </Link>
                      </ListItem>
                      <ListItem _hover={{ color: "#08D9D6" }}>
                        <Link to="/tests-manage">
                          <ListIcon as={HiWrenchScrewdriver} />
                          Quản lý bài test
                        </Link>
                      </ListItem>
                      <ListItem
                        _hover={{ color: "#08D9D6" }}
                        onClick={() => {
                          localStorage.removeItem("user");
                        }}
                      >
                        <Link to="/login">
                          <ListIcon as={AiOutlineLogout} />
                          Đăng xuất
                        </Link>
                      </ListItem>
                    </List>
                  </Box>
                </Center>
              </Box>
            </Box>
          </>
        ) : null}

        <Box w={wCenter} pt="20px" pl="30px" pr="20px" transition={"all 0.5s"}>
          <Outlet context={[left]} />
        </Box>
      </Flex>
      <Spacer />
      <Footer />
    </Stack>
  );
}

export default Home;
