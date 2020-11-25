import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import SearchSubTable from '../components/SearchSubTable.js'

const TimeTable = () => {
    return (
        <>
            <div style={{height: '10%', verticalAlign: 'middle'}}>
                <Navbar collapseOnSelect fixed="top" bg="danger" variant="dark" expand="lg" style={{height: '10%', verticalAlign: 'middle'}}>
                <Navbar.Brand href="#home" style={{height: '100%', fontSize: 'x-large', verticalAlign: 'middle'}}>시간표</Navbar.Brand>
                    <Nav className="mr-auto" style={{height: '100%'}}>
                        <Nav.Link href="/" style={{height: '100%', verticalAlign: 'baseline'}} >홈으로</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
            <SearchSubTable></SearchSubTable>
        </>
    );
};

export default TimeTable;