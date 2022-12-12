import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Tag from "./Tag";
import Pagination from "react-js-pagination";
import "../ListTag/pagtest.css";

const ListTag = () => {
  const params = useParams();
  const context = useOutletContext();
  const navigate = useNavigate();
  let CurrentPage = 0;
  if (params.id) CurrentPage = Number(params.id);
  else CurrentPage = 1;
  const data = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
    ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
    ["49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"],
    ["61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72"],
    ["73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84"],
    ["85", "86", "87", "88", "89", "90"],
  ];
  const list = data[CurrentPage - 1].map((item) => (
    <Tag data={item} left={context[0]} />
  ));

  const getTestsData = (pageNumber = 1) => {
    if (CurrentPage !== pageNumber) {
      navigate(`/tests/page/${pageNumber}`);
    }
  };

  const [sizeText, setSizeText] = useState("20px");
  useEffect(() => {
    if (context[0] === "0") {
      setSizeText("17px");
    } else {
      setSizeText("20px");
    }
  }, [context[0]]);
  return (
    <Box>
      <Heading fontSize={sizeText} color="#55423D">
        WELCOME TO <span style={{ color: "#8BD3DD" }}>ENGLISH </span>
        <span style={{ color: "#F582AE" }}>ACADEMY</span>!
      </Heading>
      {localStorage.getItem("user") ? (
        <Heading
          fontSize={sizeText}
          color="#55423D"
          ml="75%"
          mb="40px"
          textTransform="uppercase"
        >
          XIN CHÀO {JSON.parse(localStorage.getItem("user")).name}!
        </Heading>
      ) : null}
      <Center mt="40px">
        <Box>
          <SimpleGrid columns={3} spacing={10}>
            {list}
          </SimpleGrid>
          <Center color={"white"} mt={5}>
            <Pagination
              hideDisabled
              activePage={CurrentPage}
              totalItemsCount={90}
              itemsCountPerPage={12}
              itemClass="page-item"
              linkClass="page-link"
              itemClassNext="next-item"
              itemClassPrev="prev-item"
              innerClass="container"
              linkClassFirst="first-link"
              linkClassLast="last-link"
              activeClass="paginationActive"
              activeLinkClass="linkActive"
              disabledClass="disable"
              onChange={(pageNumber) => getTestsData(pageNumber)}
            />
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default ListTag;
