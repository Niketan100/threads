import { Flex, useColorMode, Image } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    const {colorMode , toggleColorMode} = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
        <Image
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        cursor={"pointer"}
        alt='as'
        w={6}
        onClick ={toggleColorMode}
        />
    </Flex>
  )
}
