import React from "react";
import { Box, Flex, Image, Text, Button, VStack } from "@chakra-ui/react";

import headImg from "../public/Head.png";

const Home = () => {
  return (
    // <main className="main-home">
    // <section className='home' id='home'>
    //   <img src={headImg} alt='Not Found' />
    //   <div className='primary-text'>
    //     <h1>Neuron</h1>
    //     <p>
    //       An all in one community-sourced platform for education. Unleash the
    //       power of online learning with handmade lessons and live lessons.
    //       Empower yourself!
    //     </p>
    //     <a
    //       href='https://app.neuroneducation.org/'
    //       rel='noreferrer'
    //       target='_blank'
    //       id='get-started'
    //     >
    //       Get Started Today
    //     </a>
    //   </div>
    // </section>
    // </main>

    <Box pt='150px' className='container'>
      <Flex as={"section"} w='100%' align='center' bg='transparent'>
        <Image
          src={headImg}
          alt='Not Found'
          maxW='60%'
          maxH='700px'
          borderColor={"black"}
        />
        <VStack spacing='30px'>
          <Text as={"h1"} fontSize='60px' fontWeight='bold'>
            Neuron Education
          </Text>
          <Text as={"p"}>
            An all in one community-sourced platform for education. Unleash the
            of online learning with handmade lessons and live lessons. Empower
            yourself!
          </Text>
          <Button
            as={"a"}
            href='https://app.neuroneducation.org/'
            fontSize={"lg"}
            fontWeight={"thin"}
            id='get-started'
            color={"white"}
            py={6}
            w='100%'
          >
            Get Started Today
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
