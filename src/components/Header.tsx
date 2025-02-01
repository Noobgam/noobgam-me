'use client';

import {Flex, Heading, Button} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "@/components/ui/color-mode";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            as="header"
            align="center"
            justify="center"
            position="relative"
            bg="gray.50"
            py="4"
            borderBottom="1px"
            borderColor="gray.200"
        >
            {/* Leftmost Brand */}
            <Heading
                as="h1"
                size="lg"
                position="absolute"
                left="1rem"
                color="gray.800"
            >
                Noobgam
            </Heading>

            {/* Centered Header Title */}
            <Heading
                as="h2"
                size="md"
                color="gray.700"
            >
                Welcome to My Site
            </Heading>

            {/* Dark/Light Mode Toggle */}
            <Button
                aria-label="Toggle dark mode"
                onClick={toggleColorMode}
                position="absolute"
                right="1rem"
                variant="outline"
                _hover={{
                    bg: 'gray.400',
                }}
            >
                {colorMode === "light" ? <FiMoon /> : <FiSun />}
            </Button>
        </Flex>
    );
}
