import React,{useState,useEffect,useCallback,useMemo} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table'

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
        <div className={"row"}>
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
       <Table className={"table"}>
           <thead>
               <tr className={"danger"}>
                   <th>순위</th>
                   <th></th>
                   <th>노래명</th>
                   <th>가수명</th>
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
                           value={props.ss}/>
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
        <h1 className={"text-center"} style={{width: '100%', "color":color[no]}}>Subject</h1>
    )
}

//Memo 기능 미사용
const  H2 = () =>{

}

export default SearchSubTable;