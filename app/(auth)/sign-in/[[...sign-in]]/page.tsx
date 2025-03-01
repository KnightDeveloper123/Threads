import { Flex } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <Flex justifyContent={'center'} alignItems={"center"} height={'100vh'} w={'100%'}>
            <SignIn />
        </Flex>
    )
}