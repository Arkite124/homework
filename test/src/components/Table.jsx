import React, {useState} from 'react';
import Tr from "./Tr.jsx";
import Form from "./Form.jsx";

const initialState=[
    {name:"John",job:"frontend",pay:400},
    {name:"Peter",job:"frontend",pay:400},
    {name:"Jack",job:"frontend",pay:300},
    {name:"Susan",job:"backend",pay:450},
    {name:"Julian",job:"backend",pay:350},
]

const Table = () => {
    const [person,setPeople] = useState(initialState);
    const take_data=(obj)=> {
        setPeople((prev)=>[...prev,obj]);
    }
    return (
        <>
            <table>
            <Tr person={person}/>
            </table>
            <br/>
            <Form take_data={take_data}/>
        </>
    )
}

export default Table;