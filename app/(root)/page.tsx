import { UserButton } from '@clerk/nextjs'
import styles from './page.module.css'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      {/* <UserButton afterSignOutUrl='/sign-in' /> */}
      <Heading>Home</Heading>
    </Box>
  )
}
