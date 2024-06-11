import React, {useEffect,useState} from 'react';

function Hooks(props){
    let [counter,setCounter] = useState(0)

    useEffect(() => {
        // When component first mounts or if counter is updated then we log a message to 
        //the console with each change (didMount/didUpdate).

        console.log("Component mounting or value changed", counter)
    
        // Here we're returning our "Cleanup function" which resets the
        // title to the default before each update
        return 
    
        // Lastly, our dependency array. This way the Effect function
        // is only invoked when the `value` has actually changed.
    }, [counter]);


    return <div>
        <h1>Counter: {counter}</h1>
        <button onClick = { () => { setCounter(counter + 1) } }> +1</button>
    </div>
}

export default Hooks