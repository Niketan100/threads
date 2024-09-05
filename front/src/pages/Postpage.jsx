import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Actions from '../components/actions.jsx';

export default function Postpage() {
    const [liked, setLiked] = useState(false);

	return (
		<>
			<Flex>
				<Flex w={'full'} alignItems={'center'} gap={4}>
					<Avatar src='/zuck-avatar.png' size={"md"} name='Niketan' />
					<Flex alignItems={'center'}>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							Mark Zuckerberg
						</Text>
						<Image src='/verified.png' w={4} h={4} ml={2} />
					</Flex>
				</Flex>

				<Flex alignItems={'center'} gap={4}>
					<Text fontSize={"sm"} color={"gray.light"}> 1d </Text>
					<BsThreeDots />
				</Flex>
			</Flex>

			<Text my={3}>Let me tell you something</Text>

			<Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={"gray.light"}>
				<Image src='/post1.png' w={'full'} />
			</Box>

			<Flex gap={3} my={3}>
				<Actions liked={liked} setLiked={setLiked} />  {/* Pass liked and setLiked */}
			</Flex>

			<Flex gap={2} alignItems={'center'}>
				<Text color={"gray.light"} fontSize={"sm"}>125 Replies</Text>
				<Box w={.5} h={.5} borderRadius={"full"} bg={"gray.light"}></Box>
				<Text color={"gray.light"} fontSize={"sm"}>{224 + (liked ? 1 : 0)} Likes</Text>  {/* Increment based on liked */}
			</Flex>
		</>
	);
}
