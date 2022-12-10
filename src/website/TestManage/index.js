import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useOutletContext } from "react-router-dom";

export default function TestManage() {
  const context = useOutletContext();

  if (context[0] === "0")
    return (
      <Center>
        <Box w="90%">
          <Box bg="rgba(37,42,52,0.5)" minH="50vh"></Box>
        </Box>
      </Center>
    );

  return (
    <Center>
      <Box w="90%">
        <Box bg="rgba(37,42,52,0.5)" minH="50vh"></Box>
      </Box>
    </Center>
  );
}
