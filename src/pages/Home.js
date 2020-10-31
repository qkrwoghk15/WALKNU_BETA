import React from 'react';
import { Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import "../index.css"

var createReactClass = require('create-react-class');

var data = [ 
    {funcName: "길찾기", func: "/Navigate", text: "목적지까지 최단경로"},
    {funcName: "시간표", func: "/TimeTable", text: "시간표 맞춤형 최단경로"},
    {funcName: "운  동", func: "/Excercise", text: "학교 한 바퀴"}
];

var MyButton = createReactClass({ 
    render: function() {
        return ( 
            <Button variant="info" size="lg" block>
                <Link className="buttonlink" to = {this.props.func}>
                    <h2 className="buttonFunc"> 
                        {this.props.funcName} 
                    </h2> 
                    {this.props.children} 
                </Link>
            </Button>
        );
    } 
});

var ButtonBox = createReactClass({ 
    render: function() { 
        return ( 
            <div className="buttonBox"> 
                <h1 className="mainTitle">WALKNU</h1> 
                <ButtonList {...this.props} /> 
                <ButtonForm /> 
            </div> 
        ); 
    } 
}); 
    
var ButtonList = createReactClass({ 
    render: function() { 
        var buttons = this.props.data.map(function(button, index){ 
            return <MyButton funcName={button.funcName} func={button.func} key={index}>{button.text}</MyButton>
         }.bind(this)); 
         
         return ( 
            <div className="buttonList"> 
                {buttons}
            </div> 
            ); 
        } 
    }); 

var ButtonForm = createReactClass({ 
    render: function() { 
        return ( 
            <div className="buttonBottom"> 
                <DropdownButton id="dropdown-item-button" title="사이트">
                    <Dropdown.Item as="button">경북대학교 홈페이지</Dropdown.Item>
                    <Dropdown.Item as="button">경북대학교 lms</Dropdown.Item>
                    <Dropdown.Item as="button">에브리타임</Dropdown.Item>
                </DropdownButton>
            </div> 
        ); 
    } 
}); 

const Home = () => {
    return (
        <div>
            <ButtonBox data={data}/>
            <hr/>
        </div>
    );
};

export default Home;