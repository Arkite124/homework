import React, {useState} from 'react';
const info={
    name:'',
    job:'',
    pay:null,
}

const Form = ({take_data}) => {
    const [person,setPerson]=useState(info);
    const handleChange=(e)=>{
        setPerson((prev)=>({...prev,[e.target.name]:e.target.value}));
        // console.log(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        take_data(person)
    }

    return (
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
            <label> 이름 :&nbsp;
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <label> 직업 :&nbsp;
                <input type="text" name="job" onChange={handleChange}/>
            </label>
            <label> 급여 : &nbsp;
                <input type="number" name="pay" onChange={handleChange}/>
            </label>
            <button>등록</button>
        </form>
    );
};

export default Form;