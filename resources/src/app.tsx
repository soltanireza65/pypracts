import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import theme from "./theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ChakraProvider>
    );
};

root.render(
    <React.StrictMode>
        <ColorModeScript />
        <App />
    </React.StrictMode>
);
