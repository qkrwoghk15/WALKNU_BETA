import React from 'react';
import { Link } from 'react-router-dom'

var createReactClass = require('create-react-class');

var data = [ 
    {funcName: "길찾기", func: "/Navigate", text: "목적지까지 최단경로"},
    {funcName: "시간표", func: "/TimeTable", text: "시간표 맞춤형 최단경로"},
    {funcName: "운  동", func: "/Excercise", text: "학교 한 바퀴"}
];

var ButtonBox = createReactClass({ 
    render: function() { 
        return ( 
            <div className="buttonBox"> 
                <h1>WALKNU</h1> 
                <ButtonList {...this.props} /> 
                <ButtonForm /> 
            </div> 
        ); 
    } 
}); 
    
var ButtonList = createReactClass({ 
    render: function() { 
        var buttons = this.props.data.map(function(button, index){ 
            return <Button funcName={button.funcName} func={button.func} key={index}>{button.text}</Button>
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
            <div className="buttonForm"> 
                <form className="buttonForm"> 
                    <input type="submit" value="추가 사이트"/>
                </form> 
            </div> 
        ); 
    } 
}); 

var Button = createReactClass({ 
    render: function() {
        return ( 
            <div className="button">
                <Link to = {this.props.func}>
                    <h2 className="buttonFunc"> 
                        {this.props.funcName} 
                    </h2> 
                    {this.props.children} 
                </Link>
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