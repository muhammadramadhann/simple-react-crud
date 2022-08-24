import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Container className="d-flex flex-column min-vh-100 py-4">
                <Routes>
                    <Route path="/" element={<Employees />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/update-employee/:id" element={<UpdateEmployee />} />
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;
