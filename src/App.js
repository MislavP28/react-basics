import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyGoal from './komponente/MyGoal';
import FunctionComponentGreeting from './komponente/FunctionDefinitionCOmponent';
import ClassComponentGreeting from './komponente/ClassComponent';
import ConstantFunctionGreetings from './komponente/ConstantFunction';

// FUNCTION APP
function App() {


const StringElement = "Hello for Jsx"
const name = "Mislav";//moramo pozvati prije funkcije i varijable
const lastName = "Pavičić";

const jsxElement = <h2>Hello for JSX syntax</h2>
const jsxVariableEL =<h2>Hello {name}</h2>
//jsx & functions
const jsxFunctionEl = <h2>Hello {fullName()}</h2>;
const lagano = <h2>Zdravo {saljiime(name, lastName)}</h2>
function fullName()
{
  return name + " " + lastName;
}
function saljiime(x,y)
{
  return x + " " + y;
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{StringElement}</h2>
        {jsxElement}
        {jsxVariableEL}
        {jsxFunctionEl}
        {lagano}
        <div>
          <ClassComponentGreeting></ClassComponentGreeting>
          <FunctionComponentGreeting></FunctionComponentGreeting>
          <ConstantFunctionGreetings></ConstantFunctionGreetings>
          <MyGoal></MyGoal>
        </div>
        

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
