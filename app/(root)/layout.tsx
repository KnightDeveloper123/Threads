import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from "@/components/ui/provider"
import { ClerkProvider } from '@clerk/nextjs'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Provider>
            <Flex flexDir={'column'} bg={'#000'} color={'#fff'}>
              <Navbar />
              <LeftSidebar />

              <Box w="100%" h={'100vh'}>
                {children}
              </Box>
              <RightSidebar />
              <Footer />


            </Flex>

          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
