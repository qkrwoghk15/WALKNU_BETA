import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

export const formik = Formik;
const schema = yup.object({
    file: yup.string().required(),  
    terms: yup.bool().required(),
});

const TimeTable = () => {
    function TableForm(){
        return(
            <div>
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
                        <td><Form.Control type="text" placeholder="ex) 데이터베이스-이용주" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        <td><Form.Control type="text" placeholder="" /></td>
                        </tr>
                    </tbody>
                </Table>
                <Button type="submit">Submit</Button>
            </div>
        );
    }

    function FileForm(){
        return(
            <formik
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
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.File
                                className="position-relative"
                                required
                                name="file"
                                label="File"
                                onChange={handleChange}
                                isInvalid={!!errors.file}
                                feedback={errors.file}
                                id="validationFormik107"
                                feedbackTooltip
                            />
                        </Form.Group>
                        <Form.row>
                            <Form.Group>
                                <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik106"
                                feedbackTooltip
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form.row>
                    </Form>
                )}
            </formik>
        );
    }

    return (
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
                                <TableForm></TableForm>
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
                            <FileForm></FileForm>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
};

export default TimeTable;