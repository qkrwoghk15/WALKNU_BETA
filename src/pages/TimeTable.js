import React,{useEffect, useState} from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

import SearchSubTable from '../components/SearchSubTable.js'

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
                <div style={{textAlign: 'right'}}>
                    <Button type="submit">Submit</Button>
                </div>
            </div>
        );
    }

    // function SubjectTable() {
        

    //     const handleChange =(e)=>{

    //     }

    //     const html=list.map((m)=>
    //         <tr>
    //             <td>{m.rank}</td>
    //             <td>
    //                 {
    //                     m.state==="상승" &&
    //                         <span style={{"color":"red"}}>▲{m.idcrement}</span>
    //                 }
    //                 {
    //                     m.state==="하강" &&
    //                     <span style={{"color":"blue"}}>▼{m.idcrement}</span>
    //                 }
    //                 {
    //                     m.state==="유지" &&
    //                     <span style={{"color":"grey"}}>-</span>
    //                 }
    //             </td>
    //             <td><img src={m.poster} width={"35"} height={"35"}/></td>
    //             <td>{m.title}</td>
    //             <td>{m.singer}</td>
    //         </tr>
    //     )
        
    //     return(
    //         <div className={"row"}>
    //             <H/>
    //             <div style={{"height":"30px"}}></div>
    //             <table className={"table"}>
    //                 <tr>
    //                     <td>
    //                         <input type={"text"} className={"input-sm"} size={"25"} onChange={handleChange}/>
    //                     </td>
    //                 </tr>
    //             </table>
    //             <Table className={"table"} responsive>
    //                 <thread>
    //                     <tr className={"success"}>
    //                         <td>순위</td>
    //                         <td>등폭</td>
    //                         <td></td>
    //                         <td>노래명</td>
    //                         <td>가수명</td>
    //                     </tr>
    //                 </thread>
    //                 <tbody>
    //                     {html}
    //                 </tbody>
    //             </Table>
    //         </div>
    //     )
    // }

    function FileForm(){
        return(
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
            </Formik>
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
                <TableForm></TableForm>
                <SearchSubTable></SearchSubTable>
            </div>
        </div>
    );
};

export default TimeTable;