import React, { useState } from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const Question = ({ data }) => {
  //   const [opened, setOpened] = useState(false);

  return (
    // <div className='faq-item'>
    //   <div>
    //     <h3>{data.question}</h3>
    //     {opened ? (
    //       <button onClick={() => setOpened(false)}>
    //         <ArrowDropUpIcon />
    //       </button>
    //     ) : (
    //       <button onClick={() => setOpened(true)}>
    //         <ArrowDropDownIcon />
    //       </button>
    //     )}
    //   </div>
    //   <p style={opened ? { display: "block" } : { display: "none" }}>
    //     {data.answer}
    //   </p>
    // </div>
    <AccordionItem w='100%' borderTop='none' ß shadow='md'>
      <Text as={"h3"} fontWeight='medium'>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {data.question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4}>{data.answer}</AccordionPanel>
    </AccordionItem>
  );
};

export default Question;
