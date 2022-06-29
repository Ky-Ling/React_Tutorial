import { useState, useEffect} from "react";

import './App.css';

// 3: State: state in react is a plain js object used by react to represent a piece of information about
//      the component current situation, it is completely managed by the component itself.

const App1 = () => {

    // First part of the square bracket is going to be the name of that state, the second part is going
    //  to be the setter function. Inside of the useState, we provide the initial value
    const [counter, setCounter] = useState(0);


    // (1): Change our counter to be 100 as soon as the page loads.
    // !!!!! Never modify state manually, never mutate the state. React state can only be changed using its
    //      own setter function
    
    // (2): First paramter of useEffect function is a callback function, second parameter is dependency array.
    // (3): If the dependency array is empty, all the code inside of callback function is going to only 
    //      happen in the initial load of the component. But if we add "counter" to this array, then the code
    //      is going to update every time that the variable inside of the array changes. When the variable 
    //      changes, we will call the code inside of the useEffect
    useEffect(() => {

        // We can not change state manually
        // counter = 100;

        // This is the right way to change state using setter function.
        // setCounter(100);

        alert("You have changed your counter to " + counter);

    }, [counter]);

    // 4: Event: event is an action that can be triggered as a result of the user action or some kind of a 
    //  system generated event, like a mouse click or a button press. 

    return (
        <div>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
};


export default App1;