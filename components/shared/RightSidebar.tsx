import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'

const RightSidebar: React.FC = () => {
    return (
        <Box overflowY={'auto'} h={'100%'} px={4} py={4} bg={'#1c1c1c'} w={{ xl: '400px', lg: "350px" }} display={{ base: 'none', lg: 'block' }}>
            <Flex justifyContent={'start'} h={'50%'}>
                <Heading fontWeight={'400'} fontSize={'16px'}>Suggested Communities</Heading>
            </Flex>

            <Flex justifyContent={'start'} h={'50%'}>
                <Heading fontWeight={'400'} fontSize={'16px'}>Suggested Users</Heading>
            </Flex>
        </Box>
    )
}

export default RightSidebar;