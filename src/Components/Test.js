import React, {useState} from "react";

const Test = ()=> {

    const [counter, setCounter] = useState(0);

    const handleIncreament = ()=> {
        setCounter(counter + 1);
    }

    return(
        <>
            This component is just for testing purpose. There is no need to add anything here.

            <h1>{counter}</h1>
            <button className="btn btn-success" onClick={handleIncreament}>Increase the number</button>
        </>
    )
};

export default Test;