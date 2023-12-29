import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import {useState} from 'react';

function App() {

  const [userInput,setUserInput]= useState({
    initialInvestment:10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
  });
  const isInputValid= userInput.duration>=1;
  function handleChange(inputIdentifier,newValue){
    setUserInput((prevUserInput)=>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
  }
  return (
    <>
      <Header/>
      <UserInput userData={userInput} handleEvent={handleChange}/>
      {!isInputValid && <p className="center"> PLease enter valid duration</p>}
      {isInputValid && <Results input={userInput}/>}
    </>
    )
}

export default App
