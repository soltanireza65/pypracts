import { Box, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

type IProps = {};

const Header: FC<IProps> = ({}) => {
    return (
        <Flex
            flexDir="column"
            w="24"
            alignItems="center"
            pos="fixed"
            // left="0"
            top="4"
        >
            <ColorModeSwitcher />
            <Box>
                <Link to="/">CV</Link>
            </Box>
        </Flex>
    );
};

export default Header;
