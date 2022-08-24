import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const UpdateEmployee = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [enteredRole, setEnteredRole] = useState("");
    const [enteredDivision, setEnteredDivision] = useState("");
    const [enteredAddress, setEnteredAddress] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getEmployeeById();
        document.title = "Update Employee";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEmployeeById = async () => {
        const response = await fetch(`http://localhost:5000/employees/${id}`);
        const data = await response.json();
        setEnteredName(data.name);
        setEnteredAge(data.age);
        setEnteredRole(data.role);
        setEnteredDivision(data.division);
        setEnteredAddress(data.address);
    }

    const handleUpdate = async (event) => {
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

        await fetch(`http://localhost:5000/employees/${id}`, {
            method: "PUT",
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json"
            }
        });

        navigate("/");

    }

    return (
        <section className="row justify-content-center mb-5">
            <Form onSubmit={handleUpdate} className="col-lg-5">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" value={enteredAge} onChange={(e) => setEnteredAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter role" value={enteredRole} onChange={(e) => setEnteredRole(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDivision">
                    <Form.Label>Division</Form.Label>
                    <Form.Control type="text" placeholder="Enter division" value={enteredDivision} onChange={(e) => setEnteredDivision(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" value={enteredAddress} onChange={(e) => setEnteredAddress(e.target.value)} />
                </Form.Group>
                <Button variant="info" type="submit" className="w-100">
                    Update
                </Button>
            </Form>
        </section>
    )
}

export default UpdateEmployee;