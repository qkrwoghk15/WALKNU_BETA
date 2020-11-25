import React from 'react';
import { Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import "../index.css"
import "../css/HomeButton.css"

var createReactClass = require('create-react-class');

var data = [ 
    {funcName: "길찾기", func: "/Navigate", text: "목적지까지 최단경로"},
    {funcName: "시간표", func: "/TimeTable", text: "시간표 맞춤형 최단경로"},
];

var MyButton = createReactClass({ 
    render: function() {
        return (
            <Button variant="danger" size="lg" block>
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
                <DropdownButton variant="" id="dropdown-item-button" title="사이트">
                    <Dropdown.Item as="button">경북대학교 홈페이지</Dropdown.Item>
                    <Dropdown.Item as="button">경북대학교 lms</Dropdown.Item>
                    <Dropdown.Item as="button">에브리타임</Dropdown.Item>
                </DropdownButton>
            </div> 
        ); 
    } 
}); 

var ButtonBox = createReactClass({ 
    render: function() { 
        return ( 
            <div className="buttonBox" style={{height: '95%'}}> 
                <h1 className="mainTitle" style={{height: '40%',margin:'auto', verticalAlign:'middle', textAlign: 'center'}}>WALKNU</h1> 
                <div style={{height: '50%', display: 'display-listbox'}}>
                    <ButtonList {...this.props} /> 
                </div>
                <ButtonForm/> 
            </div> 
        ); 
    } 
}); 

const Home = () => {
    return (
        <div style={{height: '100%'}}>
            <ButtonBox data={data}/>
            <hr/>
        </div>
    );
};

export default Home;