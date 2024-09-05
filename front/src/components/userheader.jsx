import { Avatar, Box, Flex, Link, Text, VStack,  } from '@chakra-ui/react'
import { Portal , Menu ,MenuButton , MenuList ,MenuItem} from '@chakra-ui/react';
import React from 'react'
import { useToast } from '@chakra-ui/react'
import {BsInstagram } from 'react-icons/bs'
import { CiMenuKebab } from "react-icons/ci";

export default function userheader() {

    const toast = useToast();

    const copyUrl = () =>{
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            toast({
                title: 'Copied.',
                description: "Copied Succesfully.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        })
    }
    

  return (
    <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} width={"100%"}>
            <Box>
                <Text fontSize={"2xl"} fontWeight={"bold"}>Mark Bhaisahab</Text>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"sm"}>Mark Zuckerburg</Text>
                    <Text fontSize={"sm"} bg={"gray.dark"} color={"gray.light"}>@zuck</Text>

                </Flex> 
            </Box>
            <Box>
                <Avatar 
                    name='Mark Zuckerburg'
                    src='/zuck-avatar.png'
                    size={'xl'}
                >

                </Avatar>
            </Box>
        </Flex>
        <Text> Founder of threads , Executive Chaiman and Ceo of Instagram</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>140K Followers</Text>
                <Box  w={"1"} h={"1"} bg={"gray.light"} borderRadius={"full"}></Box>
                <Link color={"gray.light"} >Instagram.com/zuck</Link>
            </Flex>
            <Flex gap={2}>
                <Box>
                    <BsInstagram size={24} cursor={"pointer"}  />
                </Box>
                <Box>
                   <Menu>
                       <MenuButton> 
                        <CiMenuKebab size={24} cursor={"pointer"} />
                        </MenuButton>
                         <Portal>
                              <MenuList bg={"gray.dark"}>
                                  <MenuItem bg={"gray.dark"} onClick={copyUrl}>Copy Link</MenuItem>
                             </MenuList>
                        </Portal>
                    </Menu>
               
                </Box>
            </Flex>
        </Flex>
        <Flex w={"full"}>
            <Flex flex={1} borderBottom={"1px solid white"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
                <Text fontWeight={"bold"} >Threads</Text>
            </Flex>
            <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={"center"} pb={"3"} cursor={"pointer"} color={"gray.light"}>
                <Text fontWeight={"bold"} >Replies</Text>
            </Flex>
        </Flex>
    </VStack>
  )
}
