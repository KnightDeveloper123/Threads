"use client";

import { sidebarLinks } from '@/constants';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer: React.FC = () => {
    const pathname = usePathname();

    return (
        <Flex display={{ base: 'flex', md: 'none' }} bg="linear-gradient(to bottom, #000, rgba(255, 255, 255, 0.27) 100%)" justifyContent={'space-between'} px={4} py={2}>
            {sidebarLinks?.map(link => {
                const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                return <Link href={link?.route} key={link.label}>
                    <Box w={'100%'} borderRadius={'10px'} bg={isActive ? "#7b40ed" : "transparent"} p={'5px'}>
                        <Flex alignItems={'center'} gap={2} w={'max-content'} flexDirection={'column'}>
                            <Image src={link.imgURL} alt={link.label} w={'20px'} h={'20px'} />
                            <Text display={{ base: 'none', sm: 'block' }} fontSize={'12px'}>{link.label.split(' ')[0]}</Text>
                        </Flex>
                    </Box>
                </Link>
            })}
        </Flex>
    )
}

export default Footer;