import { Box, Container, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";
import Header from "./Header";

// import Particles from "react-tsparticles";
// import { particleConfig } from "../../utils/particles";
// import { loadFull } from "tsparticles";

type IProps = {
    children: React.ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
    return (
        <Flex pos="relative">
            <Header />
            <Box ms="24" my="4">
                {/*  */}
                {children}
                {/*  */}
            </Box>
        </Flex>
    );
};

export default Layout;
