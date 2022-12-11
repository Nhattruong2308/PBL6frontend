import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../API/API";
function Login() {
  const [typeP, setTypeP] = useState("password");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleToggle = () => {
    if (typeP === "password") {
      setTypeP("text");
    } else {
      setTypeP("password");
    }
  };
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        HandleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const HandleSubmit = () => {
    const URL = api + "login"
    const data = {
      email: name,
      password: password,
    }
    axios.post(URL,data,
      {
        headers:{
          'Content-Type': 'application/json',
        }
      }
      ).then(
        res => {
          console.log(res.data)
          localStorage.setItem('user', JSON.stringify(res.data))
          navigate("/");
        }
    ).catch(
      error => {
        console.log(error)
      }
    )
  };
  return (
    <Stack w="100vw" minH="100vh">
      <Spacer />

      <Box
        bg="white"
        w={"550px"}
        h="450px"
        left="10%"
        bottom="50px"
        pos={"relative"}
        borderRadius="10px"
        boxShadow=" 10px 10px #888888"
        pt="40px"
      >
        <Center>
          <Box fontWeight="bold">
            <Link to="/">
              <Flex alignItems="center" mb="20px">
                <Image src={require("../../imgs/logo.png")} mr="5px" />
                <Text color={"#08D9D6"} fontSize="30px">
                  ENGLISH <span style={{ color: "#FF2E63" }}>ACADEMY</span>
                </Text>
              </Flex>
            </Link>
            <Text color={"#FF2E63"} fontSize="30px">
              Đăng nhập
            </Text>
            <Box mb="20px" mt="30px">
              <Input
                autoFocus
                type="email"
                fontWeight="bold"
                placeholder="Nhập Email hoặc Tên tài khoản"
                color="#FF2E63"
                border="4px"
                borderColor={"#FF2E63"}
                focusBorderColor="#08D9D6"
                w="350px"
                h="50px"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </Box>
            <Box mb="10px">
              <Input
                type={typeP}
                fontWeight="bold"
                placeholder="Nhập mật khẩu"
                color="#FF2E63"
                border="4px"
                borderColor={"#FF2E63"}
                focusBorderColor="#08D9D6"
                w="350px"
                h="50px"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </Box>
            <Box mb="10px">
              <Checkbox
                fontWeight="normal"
                size="sm"
                onChange={handleToggle}
                colorScheme="red"
                borderColor={"#FF2E63"}
                color="#FF2E63"
              >
                Hiện mật khẩu
              </Checkbox>
            </Box>
            <Button
              color="white"
              colorScheme="red"
              w="350px"
              fontWeight="bold"
              bgColor="#FF2E63"
              borderRadius="10px"
              onClick={HandleSubmit}
            >
              Đăng nhập
            </Button>
          </Box>
        </Center>
      </Box>

      <Box
        color={"white"}
        pos="absolute"
        zIndex={"10"}
        right="100px"
        top="200px"
      >
        <Heading fontSize="40px" textShadow={"3px 3px gray"}>
          THƯ VIỆN TIẾNG ANH LỚN NHẤT
        </Heading>
        <Heading fontSize="40px" textShadow={"3px 3px gray"}>
          VIỆT NAM TẠI ĐÂY
        </Heading>
        <Text color={"#08D9D6"}>
          Chưa có tài khoản?{" "}
          <span>
            <Link to="/sign-up">
              <Button color="#FF2E63" variant="link">
                {" "}
                Click tại đây!
              </Button>
            </Link>
          </span>
        </Text>
      </Box>
      <Footer />
    </Stack>
  );
}

export default Login;
