import { useState } from "react"

function StatesExampleComponent(){
    //Starts business logic
    const initialGreeting = "Hello guest";
    const [greeting, setGreeting] = useState(initialGreeting);
    const [count, setCount] =useState(0);


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

    //End business logic
    return (
        <div className={"day4-component"}>
            <h3>{greeting} {count} times</h3>
            <button onClick={() => setGreeting("Hello Mislav")}>Greet me</button>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}
export default StatesExampleComponent