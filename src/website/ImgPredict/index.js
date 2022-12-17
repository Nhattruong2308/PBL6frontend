import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { useOutletContext } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import axios from "axios";
import { api_model } from "../../API/API";
export default function ImgPredict() {
  const [hBox, setHBox] = useState("480px");
  const [hImg, setHImg] = useState("380px");
  const context = useOutletContext();
  const [imgPre, setImgPre] = useState(require("../../imgs/img_predict.png"));
  const [result, setResult] = useState("");
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
  useEffect(() => {
    if (context[0] === "-240px") {
      setHImg("380px");
      setHBox("480px");
    } else {
      setHImg("320px");
      setHBox("420px");
    }
  }, [context[0]]);

  const PredictImg = () => {
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
        setResult(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Center>
      <Box w="90%" color="#001858">
        <Flex
          w="100%"
          alignItems={"center"}
          h={hBox}
          transition="all 0.5s"
          py={3}
        >
          <Box flex={7.5}>
            <input
              type={"file"}
              id="file"
              accept="image/*, png, jpeg, jpg"
              style={{ display: "none" }}
              onChange={handlecreateBase64}
            />
            <Box
              as="label"
              htmlFor="file"
              cursor="pointer"
              w="73%"
              float="right"
            >
              {img === "" ? (
                <Text
                  color="#001858"
                  fontWeight={"bold"}
                  pos="absolute"
                  mt={context[0] === "-240px" ? "250px" : "210px"}
                  ml={context[0] === "-240px" ? "260px" : "220px"}
                >
                  {" "}
                  Upload ảnh tại đây
                </Text>
              ) : null}

              <Image
                zIndex={10}
                src={imgPre}
                w="100%"
                h={hImg}
                objectFit={img === "" ? "cover" : "contain"}
                borderRadius={10}
                transition="all 0.5s"
                alt="img-predict"
                border={img === "" ? "2px dotted rgb(85,66,61)" : ""}
              />
            </Box>
            <Box mt={4} w="73%" float="right">
              <Text fontSize="18px" fontWeight="bold">
                Kết quả:
              </Text>

              <Input
                bg="#FEF6E4"
                border="none"
                borderRadius={5}
                focusBorderColor="#FEF6E4"
                w="100%"
                value={result.answer}
                type="text"
                onChange={(e) => setResult(e.target.value)}
                boxShadow="1px 2px 3px gray"
              />
            </Box>
          </Box>
          <Box flex={2.5} h="100%" py={20}>
            <Center>
              <Image
                src={require("../../imgs/btn_predict.png")}
                borderRadius={"50%"}
                onClick={PredictImg}
                w="40%"
                h="40%"
                cursor="pointer"
                _hover={{ opacity: 0.8, transform: "scale(0.9)" }}
              />
            </Center>
            <Text fontWeight={"bold"} textAlign="center">
              Click tại đây để
              <br /> hiển thị kết quả
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
