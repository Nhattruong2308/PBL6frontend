import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import EditProfile from "../EditProfile";
import ChangePass from "../ChangePass";
const Profile = () => {
 
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };
  const callbackFunction = (childData) => {
    setOpen(childData);
  };

  return (
    <Center>
      <Box w="90%">
        <Box w="100%" h="300px" bg={"rgba(37,42,52,0.5)"}>
          <Flex color={"white"} w="100%" alignItems="center" p="10px" h="50px">
            <FaUser fontSize="20px" />
            <Text fontWeight="bold" ml="10px">
              Thông tin cá nhân
            </Text>
          </Flex>
          <Divider />
          <Flex w="100%" h="249px">
            <Box w="250px" float="left" pt="20px">
              <Center>
                <Box>
                  <Image
                    src={require("../../imgs/img1.png")}
                    border="2px"
                    borderColor="#08D9D6"
                    borderRadius="50%"
                    w="180px"
                  />
                  <Text color="white" textAlign="center">
                    John Wick
                  </Text>
                </Box>
              </Center>
            </Box>
            <Divider orientation="vertical" />
            <Box w="75%" h="100%">
              <Box w="100%" h="75%" color="white">
                <Center w="100%">
                  <Box w="100%" p="15px">
                    <table width="100%">
                      <tbody
                        color="white"
                        style={{ width: "100%", fontSize: "17px" }}
                      >
                        <tr style={{ height: "50px" }}>
                          <td style={{ width: "20%" }}>
                            <Flex alignItems={"center"}>
                              <AiOutlineMail style={{ marginRight: "5px" }} />{" "}
                              Email:
                            </Flex>
                          </td>
                          <td style={{ width: "50%", fontWeight: "bold" }}>
                            johnwick@gmail.com
                          </td>
                          <td style={{ width: "30%" }}>
                            <Flex>
                              <EditProfile />
                            </Flex>
                          </td>
                        </tr>
                        <tr style={{ height: "50px" }}>
                          <td>
                            {" "}
                            <Flex alignItems={"center"}>
                              <ImProfile style={{ marginRight: "5px" }} /> Họ và
                              tên:
                            </Flex>
                          </td>
                          <td style={{ fontWeight: "bold" }}>John Wick</td>
                          <td>
                            <Flex>
                              <Flex
                                onClick={openDialog}
                                cursor={"pointer"}
                                alignItems={"center"}
                                _hover={{
                                  color: "#08D9D6",
                                  textDecoration: "underline",
                                }}
                              >
                                <AiFillLock style={{ marginRight: "5px" }} />{" "}
                                <ChangePass
                                  open={open}
                                  parentCallback={callbackFunction}
                                />
                              </Flex>
                            </Flex>
                          </td>
                        </tr>
                        <tr style={{ height: "50px" }}>
                          <td>
                            <Flex alignItems={"center"}>
                              <BsGenderAmbiguous
                                style={{ marginRight: "5px" }}
                              />{" "}
                              Giới tính:
                            </Flex>
                          </td>
                          <td style={{ fontWeight: "bold" }}>Nam</td>
                          <td>
                            <Flex>
                              <Flex
                                cursor={"pointer"}
                                alignItems={"center"}
                                _hover={{
                                  color: "#08D9D6",
                                  textDecoration: "underline",
                                }}
                              >
                                <HiWrenchScrewdriver
                                  style={{ marginRight: "5px" }}
                                />{" "}
                                Quản lý bài test
                              </Flex>
                            </Flex>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </Center>
              </Box>
              <Divider />
              <Center color={"white"} fontSize="17px" pt="15px">
                <Flex>
                  <Text mr="100px">Bài test đã lưu: 5</Text>
                  <Text>Bài test của tôi: 5</Text>
                </Flex>
              </Center>
            </Box>
          </Flex>
        </Box>

        <Tabs
          w="100%"
          h="300px"
          bg={"rgba(37,42,52,0.5)"}
          mt="20px"
          color="white"
          colorScheme={"cyan"}
        >
          <TabList>
            <Tab fontWeight="bold">Bài test đã lưu</Tab>
            <Tab fontWeight="bold">Bài test của tôi</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
};

export default Profile;
