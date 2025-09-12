const Th=({person})=>{
    return(
        <>
            {Object.keys(person[0]).map((item)=>(<th>{item}</th>))}
            {/*<th>name</th>*/}
            {/*<th>job</th>*/}
            {/*<th>pay</th>*/}
        </>
    )
}

export default Th;