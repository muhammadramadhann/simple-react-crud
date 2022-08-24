import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProductList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        document.title = "Employee Data";
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const responses = await fetch("http://localhost:5000/employees");
        const data = await responses.json();
        setEmployees(data);
    }

    const onDelete = async (id) => {
        await fetch(`http://localhost:5000/employees/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        fetchEmployees();
    }


    return (
        <main className="mb-4">
            <div className="text-center bg-light p-md-4 p-3 mb-4 border">
                <h2 className="mb-3">Employee Data</h2>
                <p className="mb-0">Create, update and delete employee data.</p>
            </div>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>Division</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.role}</td>
                            <td>{employee.division}</td>
                            <td>{employee.address}</td>
                            <td>
                                <Link to={`update-employee/${employee.id}`} className="btn btn-warning me-2 mb-lg-0 mb-2">Update</Link>
                                <Button onClick={() => onDelete(employee.id)} variant="danger">Delete</Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </main>
    );
};

export default ProductList;
