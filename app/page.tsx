'use client';

import {Box, Text} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/components/Header'), { ssr: false });

function Home() {
    return (
        <Box className="Background" minH="100vh">
            <Header/>
            <Box as="section" textAlign="center" my="8" px="4">
                <Text fontSize="xl" color="gray.800">
                    Hi, I'm Noob. And this page is under construction.
                </Text>
            </Box>
        </Box>
    );
}

export default Home;
