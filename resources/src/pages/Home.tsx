import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";

type IProps = {};

const Home: FC<IProps> = ({}) => {
    const bgColor = useColorModeValue("gray.800", "gray.500");

    return (
        <Box
            minH="150vh"
            // bgColor={bgColor}
            bgColor="blue.800"
            w="4xl"
            borderRadius="2xl"
            overflow="hidden"
            p="4"
            // border="1px"
        >
            Reza Soltani's CV
        </Box>
    );
};

export default Home;
