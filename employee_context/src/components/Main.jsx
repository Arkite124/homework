import {useContext, useState} from 'react';
import Employees from "./Employees.jsx";
import Register from "./Register.jsx";
import Update from "./Update.jsx";
import useEmployeeContext from "../context/EmployeeContext.jsx";

const initialState = [
    {name:"John",age:34,job:"FrontEnd",language:"React",pay:400},
    {name:"Susan",age:28,job:"BackEnd",language:"Java",pay:490},
    {name:"Peter",age:39,job:"FrontEnd",language:"JavaScript",pay:300},
    {name:"Sue",age:30,job:"PM",language:"Java",pay:500},
    {name:"Jack",age:31,job:"Publisher",language:"Python",pay:600},
]

export const style={
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"20px",
    gap:"10px",
}
const Main = () => {
    const {controls,handleClick,ctrl} = useEmployeeContext();
    return (
        <>
            <div>
                <Employees/>
            </div>
            <div style={style}>
                {controls.map((control, index) => (
                    <button key={index} onClick={()=>handleClick(control)}>{control}</button>
                ))}
            </div>
            <div>
                {ctrl==="register" && <Register/>}
                {ctrl==="update" && <Update/>}
            </div>
        </>
    );
};

export default Main;