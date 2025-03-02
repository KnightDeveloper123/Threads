import AccountProfile from "@/components/forms/AccountProfile";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {

    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }

    return (
        <Box as={'section'} w={{ base: '100%', md: '90%' }} mx={'auto'}>
            <Flex flexDir={'column'} justifyContent={'start'} px={6} pt={'50px'}>
                <Heading>OnBoarding</Heading>
                <Text>Complete the profile now to use threads</Text>

                <Box mt={'30px'} p={10} bg={"#1c1c1c"} borderRadius={'20px'}>
                    <AccountProfile user={userData} btnTitle="Continue" />
                </Box>
            </Flex >
        </Box >
    )
}
