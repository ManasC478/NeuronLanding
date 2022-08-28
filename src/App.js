import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Team from "./components/Team";
import Example from "./components/Example";
import GetStarted from "./components/GetStarted";
import Apply from "./components/Apply";
import Footer from "./components/Footer";
import { ChakraProvider, VStack, Box } from "@chakra-ui/react";
import customTheme from "./styles/theme";
import "./styles/index.css";

const App = () => {
  return (
    <ChakraProvider theme={customTheme} pos='relative'>
      <Box as={"main"} maxW='1200px' m='auto'>
        <NavBar />
        <VStack spacing='200px'>
          <Home />
          <Features />
          <Example />
          <About />
          <Team />
          <GetStarted />
          <Apply />
        </VStack>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
