import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, } from "react-bootstrap";
import Ttable from "./Ttable"

export default function Login() {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState([]);
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (p) => {
        setPassword(p.target.value);
    }

    const handleSumbit = (g) => {
        g.preventDefault();

        if (hasErros(name,email, password)) {

        } else {
            const data = {name, email, password };
            setFormData([...formData, data]);
            g.target.reset();
            setName("")
            setEmail("")
            setPassword("")
            console.log({name, email, password });
        }



    }

    const hasErros = (name,email, password) => {
        const erros = {}
        if (!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
            erros.email = "your email must be vaild"
        }
        if (
            password.length < 8
        ) {
            erros.phone = "your password must be more than 8 charts"
        }
        if (
            name.length < 4
        ) {
            erros.name = "your name is required"
        }
        setError(erros)
        return Object.keys(erros).length
    }


    return (
        <Container className='p-3 my-5 d-flex flex-column w-50'>
            <Row className='py-5'>
                <Col>
                    <Form onSubmit={handleSumbit} noValidate style={{ width: '100%'}}>
                    <Form.Group controlId="formBasicName">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={handleName}
                            />
                            {error?.email && (
                                <div className='form-text text-danger'>
                                    {error?.name}
                                </div>
                            )}
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmail}
                            />
                            {error?.email && (
                                <div className='form-text text-danger'>
                                    {error?.email}
                                </div>
                            )}
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=" Enter Password"
                                value={password}
                                onChange={handlePassword}
                            />
                            {error?.phone && (
                                <div className='form-text text-danger'>
                                    {error?.phone}
                                </div>
                            )}
                        </Form.Group>
                        <br />
                        <Button className="mb-4 w-100" type="submit" >
                            Add Student
                        </Button>
                        <Ttable data={formData} />
                    </Form>
                </Col>
            </Row>


        </Container>

    );
}