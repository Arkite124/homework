import React, {createContext, useContext, useMemo, useState} from 'react';

const EmployeeContext=createContext();

const initialState = [
    {name:"John",age:34,job:"FrontEnd",language:"React",pay:400},
    {name:"Susan",age:28,job:"BackEnd",language:"Java",pay:490},
    {name:"Peter",age:39,job:"FrontEnd",language:"JavaScript",pay:300},
    {name:"Sue",age:30,job:"PM",language:"Java",pay:500},
    {name:"Jack",age:31,job:"Publisher",language:"Python",pay:600},
]

export const EmployeeProvider = ({children}) => {

    // 배열, 객체를 선언할때 useMemo 훅을 사용
    const controls=useMemo(()=>(["register","update","delete","reset"]),[])
    const [infos, setInfos] = useState(initialState);
    const [clickName, setClickName] = useState('');
    const [clicked, setClicked] = useState('');
    const [control,setControl] = useState("");
    const [ctrl,setCtrl] = useState("");
    const handleUpdate = (emp)=>{
        setInfos(prev=>(prev.map(info=>(info.name===clicked ? emp : info))))
        console.log(emp)
    }
    const getClickName = (n) => {
        setClicked(n)
        setClickName(n);
    }
    const handleClick = (c) => {
        if(c==="delete"){
            setInfos(prevState => prevState.filter(info=>info.name!==clicked));
            setClicked("")
            setCtrl("")
            return;
        }
        if(c==="reset"){
            setInfos(initialState);
            setClicked("");
            setCtrl("");
            return;
        }
        setCtrl(c);
    }
    const handleRegister=(emp)=>{
        if(infos.some(info=>info.name===emp.name)){
            return alert("이미 존재하는 이름입니다. 다른 이름을 사용하세요.")
        }
        setInfos(prev=>([...prev, emp]))
        setClicked(emp.name)
    }
    // 배열, 객체를 선언할때 useMemo 훅을 사용
    const value=useMemo(()=>({infos,clicked,ctrl,clickName,controls,getClickName,handleUpdate,handleClick,handleRegister}),
        [clickName, clicked, controls, ctrl, handleClick, handleRegister, handleUpdate, infos]);
        
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};
const useEmployeeContext = () => {
    const context = useContext(EmployeeContext);
    return context;
}
export default useEmployeeContext;