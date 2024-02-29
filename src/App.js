import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyGoal from './komponente/MyGoal';
import FunctionComponentGreeting from './komponente/FunctionDefinitionCOmponent';
import ClassComponentGreeting from './komponente/ClassComponent';
import ConstantFunctionGreetings from './komponente/ConstantFunction';
import LayoutHeader from './komponente/day 3/layoutheader';
import LayoutBody from './komponente/day 3/layoutbody';
import LayoutFooter from './komponente/day 3/layoutfooter';
import "./komponente/day 3/taskcss.scss";
import { PropComponent } from './komponente/day 3/propvjezba';
import MainComponent from './komponente/day 3/day3component-ponavljanje';
import Day4Component from './komponente/day 4/day4Component';


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


        {/* odavde 
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

        dovde*/}
        <Day4Component></Day4Component>

      </header>
    </div>
  
  );
}

export default App;
