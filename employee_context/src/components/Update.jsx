import React, {useEffect, useState} from 'react';
import useEmployeeContext from "../context/EmployeeContext.jsx";

const formStyle={
    display:"flex",
    flexDirection:"column",
    width:"400px",
    margin:"20px auto",
    alignItems:'center',
    padding:"20px",
    borderRadius:"5px",
    border:"1px solid #ccc",
    backgroundColor:"skyblue",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}

const labelStyle={
    marginBottom:"10px",
    display:"flex",
    flexDirection:"column",
    fontWeight:"bold",
    color:"#333",
}

const inputStyle={
    marginBottom:"10px",
    display:"flex",
    flexDirection:"column",
    width:"300px",
    borderRadius:"5px",
}
const btnStyle={
    marginBottom:"10px",
    display:"flex",
    flexDirection:"column",
    backgroundColor:"yellow",
}
const initialState = {
    name:"",
    age:"",
    job:"",
    language:"",
    pay:"",
}
const Update = () => {
    const {clicked,infos,handleUpdate}=useEmployeeContext()
    const [employee, setEmployee] = useState(initialState);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setEmployee(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleUpdate(employee);
    }
    useEffect(()=>{
        clicked && infos && setEmployee(infos.find(infos=>infos.name===clicked))
    },[infos,clicked])
    return (
        <>
            <h2>수정절차</h2>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    이름 :&nbsp;{employee.name}
                </label>
                <label style={labelStyle}>
                    나이 :&nbsp;
                    <input type="text" name="age" onChange={handleChange} value={employee.age} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    직업 :&nbsp;
                    <input type="text" name="job" onChange={handleChange} value={employee.job} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    언어 :&nbsp;
                    <input type="text" name="language" onChange={handleChange} value={employee.language} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    급여 :&nbsp;
                    <input type="text" name="pay" required style={inputStyle} value={employee.pay} onChange={handleChange} />
                </label>
                <button style={btnStyle}>제출</button>
            </form>
        </>
    );
};

export default Update;