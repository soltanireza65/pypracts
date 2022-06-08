import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Container>
            <Button variant="outline">Navbar</Button>
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
        </Container>
    );
}

export default Navbar;
