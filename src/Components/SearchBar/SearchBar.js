import React, {useState} from 'react'

const Search = (props) =>{

    const [searchVal, setSearchVal] = useState('')

    const onChange = (evnt) =>{
        setSearchVal(evnt.target.value)
        props.changeEvnt(searchVal)
    }

    return(
        <div>
            <input style={{fontSize: "45px", borderRadius: "25px"}} onChange={onChange} placeholder="Search Robot"/>
        </div>)
}

export default Search