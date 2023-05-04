import { Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/Abhishek_Yadav_Resume.pdf";

const About = () => {
  return (
    // <Container maxW={"900px"} height={"80vh"}>
    <VStack
      itemID="about"
      className="about section"
      spacing="5"
      maxW={"1000px"}
      m="auto"
      height={{ base: "100%", md: "90vh" }}
      justifyContent="center"
      alignItems="center"
      p="8"
      id="about"
    >
      <Heading>About me</Heading>
      <Link target="_blank" href={resume} download="Abhishek_Yadav_Resume" _hover={{ textDecoration: "none" }}>
        <Button variant="solid" leftIcon={<AiOutlineDownload />} colorScheme="messenger">
          Download Resume
        </Button>
      </Link>
      <Flex flexDir={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"center"}>
        <Image
          w={{ base: "50%", md: "40%" }}
          src="https://messengerbot.app/wp-content/uploads/2021/08/User-Interface-USER-INTERFACE-OF-MOBILE-APPS.png"
        />
        <Text fontSize={"20px"}>
          Enthusiastic web developer with ability to learn and collaborate in rapidly changing environments. Learning
          JavaScript, ReactJS and Data Structures & Algorithms. Passionate to apply Coding skills to develop quality
          solutions.
        </Text>
      </Flex>
    </VStack>
    // </Container>
  );
};

export default About;
