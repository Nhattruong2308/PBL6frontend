import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./website/Login";
import SignUp from "./website/SignUp";
import Home from "./website/Home";
import ListTag from "./website/ListTag";
import Profile from "./website/Profile";
import ImgPredict from "./website/ImgPredict";
import Testing from "./website/Testing";
import QuestionsTest from "./website/QuestionsTest";
import TestManage from "./website/TestManage";
import TestInfo from "./website/TestInfo";
function App() {
  return (
    <Box className="bg" scrollBehavior={"smooth"}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<ListTag />} />
          <Route path="page/:id" element={<ListTag />} />
          <Route path="profile" element={<Profile />} />
          <Route path="predict" element={<ImgPredict />} />
          <Route path="tests-manage" element={<TestManage />} />
          <Route path="test-info/:id" element={<TestInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/testing" element={<Testing />}>
          <Route path="page/:id" element={<QuestionsTest />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
