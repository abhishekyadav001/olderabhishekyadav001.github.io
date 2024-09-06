import { Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/Abhishek_Yadav_Resume.pdf";

const About = () => {
  return (
    <VStack
      id="about"
      spacing="5"
      maxW={"1000px"}
      m="auto"
      height={{ base: "100%", md: "90vh" }}
      justifyContent="center"
      alignItems="center"
      p="8"
    >
      <Heading>About me</Heading>
      <Button
        variant="solid"
        leftIcon={<AiOutlineDownload />}
        colorScheme="messenger"
        href={resume}
        download="Abhishek_Yadav_Resume"
        target="_blank"
      >
        Download Resume
      </Button>
      <Flex flexDir={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"center"}>
        <Image
          w={{ base: "50%", md: "40%" }}
          src="https://messengerbot.app/wp-content/uploads/2021/08/User-Interface-USER-INTERFACE-OF-MOBILE-APPS.png"
          alt="User Interface"
        />
        <Text fontSize={"20px"}>
          <p>
            Enthusiastic web developer with ability to learn and collaborate in rapidly changing environments. Learning
            JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind and Data Structures & Algorithms. Passionate to
            apply Coding skills to develop quality solutions.
          </p>
        </Text>
      </Flex>
    </VStack>
  );
};

export default About;
