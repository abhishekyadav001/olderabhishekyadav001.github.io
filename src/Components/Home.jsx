import { Avatar, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/profile-pic (3).png";

const Home = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="flex-end"
      gap="5%"
      minH={"90vh"}
      bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
      // bg="black"
      color="white"
      id="home"
    >
      <Avatar width="300px" height="300px" name="Abhishek Yadav" src={profilePic}  />
      <VStack alignItems={"flex-start"} spacing="5" w={{ base: "90%", md: "60%" }}>
        <Heading>Hi👋,</Heading>
        <Heading>I am Abhishek Yadav</Heading>
        <Heading pb={6} fontSize="2xl">
          <Typewriter
            options={{
              strings: ["I'm Full Stack Web Developer.", "Writing clean & simple code."],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Home;
