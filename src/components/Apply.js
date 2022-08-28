import {
  Box,
  Button,
  SimpleGrid,
  HStack,
  ListIcon,
  Text,
  UnorderedList,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ListItem } from "@material-ui/core";
import React from "react";

const Apply = () => {
  return (
    <Box pb={20}>
      <div className='header'>
        <h2>Apply</h2>
        <div id='underline'></div>
      </div>
      <SimpleGrid columns={2} spacing={24}>
        <Box
          py={7}
          px={9}
          rounded='lg'
          boxShadow='2xl'
          border='1px solid'
          borderColor='gray.200'
        >
          <Text textAlign='center' fontWeight='normal' fontSize='2xl' mb={4}>
            Topic Lead
          </Text>
          <VStack spacing={5}>
            <Text>
              Become the lead for a topic and create videos on it! Ilustrate
              your knowledge and highlight your capabilities as an individual.
            </Text>
            <Box>
              <Text fontWeight='bold' fontSize='md' textAlign='center'>
                Requirements
              </Text>
              <UnorderedList>
                <ListItem>
                  Must have experience with the topic you are applying for!
                </ListItem>
                <ListItem>
                  Must have a computer to record/stream videos from (If you
                  don't know how, we'll help!)
                </ListItem>
              </UnorderedList>
              <Link
                d='block'
                mt={5}
                w='full'
                rounded='lg'
                bg='#132e4d'
                color='white'
                textAlign='center'
                py={3}
                fontSize='lg'
                fontWeight='normal'
                variant='link'
                href='https://forms.gle/XL84znyNnKeET7n26'
                rel='noreferrer'
                target='_blank'
              >
                Apply
              </Link>
              <Text fontSize='sm' textAlign='center'>
                *Must be in high school or above
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box
          py={7}
          px={9}
          rounded='lg'
          boxShadow='2xl'
          border='1px solid'
          borderColor='gray.200'
        >
          <Text textAlign='center' fontWeight='normal' fontSize='2xl' mb={4}>
            Outreach and Media Lead
          </Text>
          <VStack spacing={5}>
            <Text>
              Run the social media accounts, market, and promote the
              organization! Illustrate your knowleedge and highlight you
              capabilities as an individual!
            </Text>
            <Box>
              <Text fontWeight='bold' fontSize='md' textAlign='center'>
                Requirements
              </Text>
              <UnorderedList>
                <ListItem>
                  Must have experience with social media and writing emails!
                </ListItem>
                <ListItem>
                  Must be able to create infographics, promotional media, etc...
                  as well as handle messages on social media!
                </ListItem>
              </UnorderedList>
              <Link
                d='block'
                mt={5}
                w='full'
                rounded='lg'
                bg='#132e4d'
                color='white'
                textAlign='center'
                py={3}
                fontSize='lg'
                fontWeight='normal'
                variant='link'
                href='https://forms.gle/eABVvp2xnQz95EuM6'
                rel='noreferrer'
                target='_blank'
              >
                Apply
              </Link>
              <Text fontSize='sm' textAlign='center'>
                *Must be in high school or above
              </Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Apply;
