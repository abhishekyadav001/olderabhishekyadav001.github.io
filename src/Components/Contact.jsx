import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

const Contact = () => {
  return (
    <VStack maxW={"1000px"} m="auto" id="contact" gap="10" itemID="contact ">
      <Heading>Let's get in touch</Heading>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="space-evenly" alignItems={"center"} w={"100%"}>
        <HStack gap={{ base: "5", md: "10" }} my="4">
          <Tooltip hasArrow label="yadavabhishek2723@gmail.com" bg="#005885" aria-label="GmailId">
            <Link href="mailto:yadavabhishek2723@gmail.com">
              <Icon as={MdMarkEmailUnread} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="+917083626134" bg="#005885" aria-label="Phone Numbers">
            <Link href="tel:+917083626134">
              <Icon as={BsFillTelephoneInboundFill} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="abhishekyadav68" bg="#005885" aria-label="Phone Numbers">
            <Link href="https://twitter.com/abhishekyadav68" target="_blank">
              <Icon as={BsTwitter} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="Abhishek Yadav" bg="#005885" aria-label="Phone Numbers">
            <Link href="https://www.linkedin.com/in/" target="_blank">
              <Icon as={BsLinkedin} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="abhishekyadav001" bg="#005885" aria-label="Phone Numbers">
            <Link href="https://github.com/abhishekyadav001" target="_blank">
              <Icon as={BsGithub} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </Tooltip>
        </HStack>
        <Box rounded={"lg"} boxShadow={"lg"} p={6} maxWidth="450px" width={"100%"}>
          <form action="https://formsubmit.co/315d7a943c8ac769462e5018800e4028" method="POST">
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement children={<FaUserTie color="#525252" />} />
                <Input type="text" name="name" placeholder="Enter your name" required />
              </InputGroup>
              <InputGroup>
                <InputLeftElement children={<MdMarkEmailUnread color="#525252" />} />
                <Input type="text" name="email" placeholder="Enter email address" required />
              </InputGroup>
              <FormControl isRequired>
                <Textarea name="message" placeholder="Enter your message....." />
              </FormControl>
              <Stack>
                <Button
                  type="submit"
                  colorScheme="messenger"
                  _hover={{ bg: "blue.500" }}
                  rightIcon={<RiSendPlaneFill />}
                >
                  Send Message
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </VStack>
  );
};

export default Contact;
