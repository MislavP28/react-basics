import { useState } from "react";
import userData from "./userdata";

function StatesExampleComponent(){
    //Starts business logic
    console.log("user data ==>", userData)
    const initialGreeting = "Hello guest";
    let initialUser = {
        name: "Mislav",
        lastName: "Pavičić",
        role: "developer",
        imageUrl: "https://miro.medium.com/v2/resize:fit:800/1*6T76GFF-nAN2GQ0w4Njznw.jpeg"
    }
    if(userData !== undefined){initialUser = userData}
    const [greeting, setGreeting] = useState(initialGreeting);
    const [count, setCount] =useState(0);
    const ButtonFancy = {
        backgroundColor:"plum",
        color:"white",
        margin:"20px",
        border:"2px solid black",
        borderRadius:"50px",
        width:"100px",
        height:"50px",
        font:"larger"
    };
    const [user, setUser] = useState(initialUser);


    function handleCounter(){
        const noGreeting = "NO greetings for you."
        if(count === 3){
            setCount(noGreeting);
            setGreeting("");
            return
        }
        else if (count === noGreeting){
            setCount( 3 + 1);
            setGreeting(initialGreeting);
            return
        }
        setCount(count + 1)
    }
    function handleGreeting(){
        setGreeting(`Hello ${user.name} ${user.lastName} (${user.role})`)
    }

    //End business logic
    return (
        <div className={"day4-component"}>
            <h3>{greeting} {count} times</h3>
            <img src={user.imageUrl}></img>
            <button style={ButtonFancy} onClick={() => handleGreeting()}>Greet me</button>
            <button style={ButtonFancy} onClick={() => handleCounter()}>Count</button>
        </div>
    )
}
export default StatesExampleComponent