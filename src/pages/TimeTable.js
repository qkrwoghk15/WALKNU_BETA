import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

const schema = yup.object({
    file: yup.string().required(),
    terms: yup.bool().required(),
});

const TimeTable = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
    >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <div>
                <div>
                    <Navbar bg="danger" variant="dark">
                        <Navbar.Brand href="#home">시간표</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/">홈으로</Nav.Link>
                            </Nav>
                    </Navbar>
                </div>

                <div>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                직접 입력하기
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wen</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        </tr>
                                        <tr>
                                        <td>4</td>
                                        </tr>
                                        <tr>
                                        <td>5</td>
                                        </tr>
                                        <tr>
                                        <td>6</td>
                                        </tr>
                                        <tr>
                                        <td>7</td>
                                        </tr>
                                        <tr>
                                        <td>8</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button type="submit">Submit</Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                사진 입력하기
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.File
                                            className="position-relative"
                                            required
                                            name="file"
                                            onChange={handleChange}
                                            isInvalid={!!errors.file}
                                            feedback={errors.file}
                                            id="validationFormik107"
                                            feedbackTooltip
                                        />
                                    </Form.Group>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        )}
        </Formik>
    );
};

export default TimeTable;