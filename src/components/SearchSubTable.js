import React,{useState,useEffect} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import InfoButton from '../components/InfoButton.js'

import "../css/SubTable.css"

function TableForm(){
    return(
        <>
            <div style={{display:'blcok', height: '40%'}}>
                <Table striped bordered hover style={{height: '100%'}}>
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
                    <tbody style={{height: '100%'}}>
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
            </div>
            
            <div style={{textAlign: 'right'}}>
                <Button type="submit">Submit</Button>
            </div>
        </>
    );
}

function SearchSubTable() {
    const [subject, setSubject]= useState([])
    const [ss, setSs] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:3000/music.json').then((res)=>{
            setSubject(res.data);
        })
    },[])//execute when Mount => componenetDidMount
    
    const handleUserInput = (ss)=> {
        setSs(ss);
    }

    return(
        <div style={{"width":"100%", height:'100%', "margin":"0"}}>
            <TableForm></TableForm>
            <H/>
            <SearchBar ss={ss} onUserInput={handleUserInput}/>
            <div style={{"height":"30px"}}></div>
            <SubjectTable subject={subject} ss={ss}/>
        </div>
    )
}

function SubjectTable(props) {
    let row=[];
    props.subject.forEach((s)=>{
        if(s.title.indexOf(props.ss)==-1){
            return;
        }
        //append array
        row.push(<SubjectRow subject={s}/>)
    })

    return(
       <Table>
           <thead>
               <tr>
                   <th>순위</th>
                   <th></th>
                   <th>노래명</th>
                   <th>가수명</th>
                   <th>위치</th>
               </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
       </Table>
   )
}

function SubjectRow(props) {
    return(
        <tr>
            <td>{props.subject.rank}</td>
            <td><img src={props.subject.poster} width={"30"} height={"30"}/></td>
            <td>{props.subject.title}</td>
            <td>{props.subject.singer}</td>
            <td><InfoButton></InfoButton></td>
        </tr>
    )
}

function SearchBar(props) {
    const  onChange =(e)=>{
        props.onUserInput(e.target.value);
    }
    return(
        <table className={"table"}>
            <tr>
                <td>
                    <input type={"text"} size={"25"} className={"input-sm"} placeholder={"Search"} onChange={onChange}
                           value={props.ss} style={{width:"40%"}}/>
                </td>
            </tr>
        </table>
    )
}

//Memo 기능 사용
const  H = () =>{
    const color =["red","orange","pink","yellow","blue"];
    const no=parseInt(Math.random()*5); //random(0.0~0.99)
    return(
        <h1 className={"text-center"} style={{width: '100%', "color":color[no]}}>과 목 검 색</h1>
    )
}

//Memo 기능 미사용
const  H2 = () =>{

}

export default SearchSubTable;