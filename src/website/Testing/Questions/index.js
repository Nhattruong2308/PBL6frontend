import {
  Center,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Questions(props) {
  return (
    <Flex
      w="100%"
      boxShadow="2xl"
      bg="white"
      key={props.data}
      p={3}
      borderRadius={8}
    >
      <Center flex={1}>
        <Text
          fontWeight="bold"
          fontSize="25px"
          color="white"
          borderRadius="50%"
          py={2}
          px={4}
          bg={Number(props.data) % 2 === 0 ? "#08D9D6" : "#FF2E63"}
        >
          {props.data}
        </Text>
      </Center>
      <Center flex={4.5}>
        <Image
          src={require("../../../imgs/dog.png")}
          w="85%"
          h="35vh"
          objectFit="cover"
          borderRadius={8}
        />
      </Center>
      <Center flex={4.5}>
        <RadioGroup>
          <Stack>
            <Radio value="1" colorScheme="red" borderColor="#FF2E63">
              The dog is running through the glass.
            </Radio>
            <Radio value="2" colorScheme="red" borderColor="#FF2E63">
              The dog is running through the glass.
            </Radio>
            <Radio value="3" colorScheme="red" borderColor="#FF2E63">
              The dog is running through the glass.
            </Radio>
            <Radio value="4" colorScheme="red" borderColor="#FF2E63">
              The dog is running through the glass.
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </Flex>
  );
}
