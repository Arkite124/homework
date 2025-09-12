import React from "react";

const Td=({item})=>{
    return(
       <>
        {Object.values(item).map((item)=>(<td>{item}</td>))}
       </>
    )
}

export default Td;