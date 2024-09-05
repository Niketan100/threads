import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { BsOctagon, BsThreads, BsThreeDots } from "react-icons/bs";
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import Actions from './actions.jsx';
export default function userPost() {
    const[liked , setLiked] =useState(false);
  return (
        <Link to={"/mark/post/1"}>
            <Flex gap={4} mb={4} py={5}>  
                <Flex flexDirection={"column"} alignItems={"center"}>
                  
                     <Avatar size={"md"} name={"Mark"} src='/zuck-avatar.png' mb={"auto"}/>

                        <Box w="1px" h={"full"} bg="gray.light" my={2} >  </Box>

                        <Box position={"relative"} mt={"auto"} w={"full"} >

                          <Avatar size={"xs"}
                            name={"Mark"} src='https://bit.ly/ryan-florence'
                            position={"relative"} top={"0px"} left={"25px"}/>

                         <Avatar size={"xs"}
                             name={"Mark"} src='https://bit.ly/sage-adebayo'
                            position={"absolute"} top={"30px"} left={"10px"}/>


                         <Avatar size={"xs"}
                             name={"Mark"} src='https://bit.ly/kent-c-dodds'
                              position={"absolute"} top={"0px"} left={"-1px"}/>

                       </Box>
                </Flex>



                <Flex flex={1} flexDirection={"column"} gap={1}>

                    <Flex justifyContent={"space-between"} w={"full"}>
                         <Flex w={"full"} alignItems={"center"}>
                             <Text fontSize={"small"} fontWeight={"bold"} >
                                  Mark Zuckerberg
                              </Text>
                              <Image src='/verified.png' w={4} h={4} ml={1}/>
                          </Flex>

                          <Flex gap={4} alignItems={"center"} >
                              <Text fontStyle={"sm"} color={"gray.light"}>1d</Text>
                             <BsThreeDots />
                          </Flex>
                    </Flex>

                    {/* Image renderng and text of Post */}
                    <Text fontSize={"sm"} >This is Not a first Post dont you see?</Text>
                    <Box borderRadius={6} overflow={'hidden'} border={"1px solid "} borderColor={"gray.light"}>
                        <Image src='/post1.png' w={"full"} />
                   </Box>
                   <Flex my={1}>
                       <Actions liked={liked} setLiked={setLiked}/>
                   </Flex>

                    {/* Replies adn Like count */}
                     <Flex gap={2} alignItems={'center'}>
                        <Text color={"gray.light"} fontSize={"sm"}>125 Replies</Text>
                        <Box w={.5} h={.5} borderRadius={"full"} bg={"gray.light"}></Box>
                        <Text color={"gray.light"} fontSize={"sm"}>{23345 + (liked ? 1 : 0)}</Text>
                     </Flex>
                </Flex>    
          </Flex>        
        </Link>
  )
}
