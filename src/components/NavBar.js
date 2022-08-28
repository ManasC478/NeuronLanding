import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [topBar, setTopBar] = useState(window.innerWidth > 700);

  const navLinks = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Apply",
      link: "#apply",
    },
  ];

  useEffect(() => {
    const setState = () => {
      if (window.innerWidth <= 700) {
        setTopBar(false);
      } else {
        setTopBar(true);
      }
    };

    window.addEventListener("resize", setState);

    return () => window.removeEventListener("resize", setState);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box as={"nav"} className='container' pos='absolute' top='0'>
      <Flex
        justify='space-between'
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        py={4}
        px={8}
        align={"center"}
      >
        <Flex align='center'>
          <Text id='logo' fontSize='24px' fontWeight='bold'>
            Neuron
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10} align='center'>
            <Stack direction={"row"} spacing={4}>
              {navLinks.map((item, index) => (
                <NavItem key={index} navItem={item} />
              ))}
            </Stack>
          </Flex>
        </Flex>
        <Button
          id='signin'
          fontSize={"md"}
          fontWeight='thin'
          color={"white"}
          href={"https://app.neuroneducation.org/"}
        >
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

const NavItem = ({ navItem }) => {
  const linkColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Link
      p={2}
      href={navItem.link ? navItem.link : "#"}
      fontSize={"lg"}
      fontWeight={"bold"}
      color={linkColor}
    >
      {navItem.name}
    </Link>
  );
};

export default NavBar;
