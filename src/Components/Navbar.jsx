import {Box,Button,Container,Image,Text} from "@chakra-ui/react"

export const Navbar=()=>{
    return (
      <Container style={{display:"flex", justifyContent:"space-between",textAlign:'center',alignItems:"center",paddingRight:"20px" ,paddingLeft:"20px"}}>
        <Box>
          <Text>Abhishek Yadav</Text>
        </Box>
       <Container style={{display:"flex", justifyContent:"space-between",gap:"40px" }}>
       <Box><Text fontSize="6xl" as="h4" >Home</Text></Box>
       <Box><Text fontSize="6xl" as="h4" >About</Text></Box>
       <Box><Text fontSize="6xl" as="h4" >Skills</Text></Box>
       <Box><Text fontSize="6xl" as="h4" >Projects</Text></Box>
       <Box><Text fontSize="6xl" as="h4" >Contact</Text></Box>
       </Container>
       <Box>
        <Button>Download Resume</Button>
       </Box>
      </Container>
    )
}