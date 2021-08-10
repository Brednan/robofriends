import './App.css'
import React, {useState, useEffect} from 'react'
import Robot from "./Components/Robot/Robot.js"
import {robots} from "./robots"
import Styled from "./Main.module.css"
import Search from "./Components/SearchBar/SearchBar.js"

const App = () =>{
    const [robotList, editRobots] = useState(robots)
    const [filteredList, editFilteredList] = useState([robotList])
    const [userInput, editUserInput] = useState('')

    let listToRender 

    const onSearch = (input) =>{
      let newList = robotList.filter(r => r.name.includes(input))
      editFilteredList(newList)
      editUserInput(input)
    }

      if(userInput.length >= 1){
          listToRender = filteredList.map(r => <Robot email={r.email} username={r.username} name={r.name} key={r.id}/>)
      }
      else if(userInput.length === 0){
          listToRender = robotList.map(r => <Robot email={r.email} username={r.username} name={r.name} key={r.id}/>)
    }


    return(
      <div>
        <h1 className={Styled.title}>ROBOFRIENDS</h1>
        <div style={{position: "relative", left: "650px", width: "1050px"}}><Search changeEvnt={onSearch}/></div>
        <div className={Styled.main}>
          {listToRender}
          {/* <Robot email={"example"} username={"example"} name="example"/> */}
        </div>
      </div>)
}

export default App
