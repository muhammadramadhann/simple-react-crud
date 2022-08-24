import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const AddEmployee = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [enteredRole, setEnteredRole] = useState("");
    const [enteredDivision, setEnteredDivision] = useState("");
    const [enteredAddress, setEnteredAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Add Employee";
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const employee = {
            name: enteredName,
            age: enteredAge,
            role: enteredRole,
            division: enteredDivision,
            address: enteredAddress
        }

        if (employee.name === "" || employee.age === "" || employee.role === "" || employee.division === "" || employee.address === "") {
            alert('Field input tidak boleh kosong!');
            return;
        }

        await fetch("http://localhost:5000/employees", {
            method: "POST",
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json"
            }
        });

        navigate("/");
    }

    return (
        <section className="row justify-content-center mb-5">
            <Form onSubmit={handleSubmit} className="col-lg-5">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setEnteredName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" onChange={(e) => setEnteredAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter role" onChange={(e) => setEnteredRole(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDivision">
                    <Form.Label>Division</Form.Label>
                    <Form.Control type="text" placeholder="Enter division" onChange={(e) => setEnteredDivision(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" onChange={(e) => setEnteredAddress(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default AddEmployee