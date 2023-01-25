import { useState } from 'react'
import './App.css'



function App() {

  let people = [
                "Henrik",
                "Martine",
                "André",
                "Angelica",
                "Craig",
                "Atle",
                "Fanni",
                "Peder",
                "Simen",
                "Philip",
                "Stian",
                "Thea",
                "Stine",
                "Isabel",
                "Mari",
                "Patrick",
                "Martin",
                "Miruna",
                "Ingrid",
                "Kate",
                "Helene",
                "Gina",
                "Christianie",
                "Aliona",
                "Merete"
  ]

  const [selector, setSelector] = useState("Who are you?")
  const [person, setPerson] = useState("Random Name Getter")

  function handleSelected(newSelectedPerson){
    setSelector(newSelectedPerson)
  }

  //pick one random
  function getOneName(){
    return people[Math.floor(Math.random()*people.length)];
  }

    //pick one random
  function getNNames(n){

    if(selector === "Who are you?")
    {
      return selector
    }

    let picks = []

    picks.push(selector)


    while(picks.length < n)
    {
      let name = getOneName()

      if(!picks.includes(name))
        {
          picks.push(name) 
        }
    }

    let result = picks[0];
    for(let i = 1; i<n-1 ; i++)
    {
      result += ", " + picks[i]
    }
    if(n!=2)
      { result += ","}
    result += " & " + picks[n-1]

    return result
  }

  return (
    <div className="App">
    
      <div>
        <a href="https://witted.com" target="_blank">
          <img src="witted.svg" className="logo" alt="Witted logo" /> </a>
      </div>
      <div>
      <label class="custom-select">

        <select 
          onChange={(event) => handleSelected(event.target.value)}
          value={selector} >

          <option disabled selected>Who are you?</option>
            {
            people.map((person) => <option key = {person} value={person}>{person}</option> )
          }
        </select>
        </label>
      </div>
      <div className="card">
        <div className="lefted">
          <button onClick=
            {
              () => setPerson((getNNames(2)))
            }
            >
            You and someome!
          </button>
        </div>
        <div className="righted">
          <button onClick=
            {
              () => setPerson((getNNames(3)))
            }
            >
            Three total!
          </button>
        </div>
      </div>
      <h1 class="whiteshadow">{person}</h1>
    </div>
  )
}

export default App
