import React, {useEffect, useState} from 'react';
import InfoTable from "./InfoTable";
import {style} from "./Main.jsx";
import useEmployeeContext from "../context/EmployeeContext.jsx";

const initialState = {
    name:'',
    age:'',
    job:'',
    language:'',
    pay:'',
}

const Employees = () => {
    const {infos,getClickName,clicked}=useEmployeeContext()
    const [info, setInfo] = useState(initialState);
    const handleClick = (N) => {
        getClickName(N);
        setInfo(infos.find(info => info.name === N))
    }
    useEffect(() => {
        if(!clicked){setInfo(initialState)
        return;}
        clicked && infos && setInfo(infos.find(info => info.name === clicked));
    },[clicked,infos])
    return (
        <>
            <div style={style}>
                {infos.map((info,idx) => (<button key={idx} onClick={()=>{handleClick(info.name)}}>{info.name}</button>))}
            </div>
            <InfoTable info={info} clicked={clicked}/>
        </>
    );
};

export default Employees;