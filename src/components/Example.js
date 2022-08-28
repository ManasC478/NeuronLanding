import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import exampleImg from "../public/example-img.png";

const Example = () => {
  return (
    // <main className="main-example">
    //     <section className="example">
    //         <h4 id="peek">A   Sneak   Peek</h4>
    //         <img src={exampleImg} alt="not found"/>
    //         <div id="tag-line">
    //             <h3>Watch.</h3>
    //             <h3>Learn.</h3>
    //             <h3>Advance.</h3>
    //             <a href="https://app.neuroneducation.org/" rel="noreferrer" target="_blank">Learn More</a>
    //         </div>
    //     </section>
    // </main>
    <Box w='100%' pos='relative'>
      <Image src={exampleImg} alt='Not Found' w='100%' rounded='lg' />
      {/* <Text id='peek'>A Sneak Peak</Text> */}
    </Box>
  );
};

export default Example;
