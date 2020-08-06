import React, { useEffect, useState } from 'react';
import Doggo from './Doggo'
import './App.css';

const App = () => {
  // API key
  const APP_KEY = '67c59eb5-34bd-4350-babc-1eb798a8fc06'

  //State to store doggo data
  const [doggo, setDoggo] = useState([])
  const [doggoPic, setDoggoPic] = useState("")

  // Method that runs to call the API fetch function
  useEffect(() => {
    getDoggo()
  }, [])

  const getNext = e => {
    if (doggo == undefined) {
      getDoggo()
    }
    getDoggo()
  }

  // Fetch API function
  const getDoggo = async () => {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search`)
    const data = await response.json();
    // Assigning API data to state
    setDoggo(data[0].breeds[0]);
    setDoggoPic(data[0].url)
    // Testing
    console.log(data[0].breeds[0]);
  }

  return (
    <div className="App">
      <h1>Will this be you next doggo?</h1>

      <div className="profile">
        <Doggo
          pic={doggoPic}
          temperament={doggo.temperament}
          name={doggo.name}
        />
        <button onClick={getNext}>Next Good Boy</button>
      </div>
    </div>
  )
}

export default App;
