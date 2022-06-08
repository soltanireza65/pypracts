import { Switch, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

type IProps = {};

const DarkModeSwitch: FC<IProps> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <div>
            <Switch
                position="fixed"
                top={4}
                right={4}
                colorScheme="green"
                onClick={toggleColorMode}
            />
        </div>
    );
};

export default DarkModeSwitch;
