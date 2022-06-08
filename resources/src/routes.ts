import { ReactNode } from "react";
import About from "./pages/About";
import Home from "./pages/Home";

interface IAppRoute {
    path: string;
    element: ReactNode;
}

export const appRoutes: IAppRoute[] = [
    // {
    //     path: "/",
    //     element: Home,
    // },
    // {
    //     path: "/about",
    //     element: About,
    // },
];

// ReactNode
