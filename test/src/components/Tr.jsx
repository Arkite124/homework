import React, {useState} from "react";
import Td from "./Td.jsx";
import Th from "./Th.jsx";

const Tr=({person})=>{
    return(
        <>
            <tr>
                <Th person={person}/>
            </tr>
           
                {person.map(item=>(<tr><Td item={item}/></tr>))}

        </>
    )
}

export default Tr;