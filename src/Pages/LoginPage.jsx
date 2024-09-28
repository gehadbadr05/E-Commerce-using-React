import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, } from "react-bootstrap";
import { useNavigate } from 'react-router';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState([]);
    const navigate =useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (p) => {
        setPassword(p.target.value);
    }

    const handleSumbit = (g) => {
        g.preventDefault();

        if (hasErros(email, password)) {

        } else {
            const data = { email, password };
             navigate('/')
            setFormData([...formData, data]);
            g.target.reset();
            setEmail("")
            setPassword("")
            console.log({ email, password });
        }
    }

    const hasErros = (email, password) => {
        const erros = {}
        if (!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
            erros.email = "your email must be vaild"
        }
        if (
            password.length < 8
        ) {
            erros.phone = "your password must be more than 8 charts"
        }
     
        setError(erros)
        return Object.keys(erros).length
    }


    return (
        <Container className='p-3 my-5 d-flex flex-column w-50'>
            <Row className='py-5'>
                <Col>
                    <Form onSubmit={handleSumbit} noValidate style={{ width: '100%'}}>
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
                        <Button className="btn btn-success" type="submit" >
                            Login
                        </Button>
                       
                    </Form>
                </Col>
            </Row>


        </Container>

    );
}