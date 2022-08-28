import React from "react";
import { Box, Text, Button, HStack, Center } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    // <section className="start-now">
    //     <div className="text">
    //         <h3>It's Time To Empower Yourself!</h3>
    //         <a href="https://app.neuroneducation.org/" rel="noreferrer" target="_blank">Get Started</a>
    //     </div>
    // </section>

    <Box
      py='20px'
      w='100%'
      rounded='lg'
      bgGradient='linear(to-br, #63a4ff, #83eaf1)'
      // bg='#132e4d'
    >
      <Center>
        <HStack spacing='50px' align='center'>
          <Text as={"h3"} color='white' fontSize='32px'>
            It's Time To Empower Yourself!
          </Text>
          <Button
            as={"a"}
            bg='#132e4d'
            color='white'
            href='https://app.neuroneducation.org/'
            rel='noreferrer'
            target='_blank'
            _hover={{ bg: "#132e4d" }}
          >
            Get Started
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default GetStarted;
